import React, {useEffect, useState} from 'react';
import {ControlledEditor} from '@monaco-editor/react';
import Select from 'react-select';

process.hrtime = () => 1;

const {processPlugin} = require('@sdr/core');
const {plugin: controllerPlugin, config: controllerConfig} = require('@sdr/controller');
const {plugin: modelsPlugin, config: modelsConfig} = require('@sdr/models');
const {plugin: rawFetchPlugin, config: rawFetchConfig} = require('@sdr/raw-fetch');
const {classesPlugin, handlersPlugin} = require('@sdr/serverless-api-base');
const {plugin: validateModelsPlugin, config: validateModelsConfig} = require('@sdr/validate-models');

const controllerSchema = `directive @request(method: Method, path: String) on FIELD_DEFINITION
directive @controller(path: String) on OBJECT
directive @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT

directive @auth on FIELD_DEFINITION

enum Method {
  POST
  GET
  DELETE
  PUT
}
`;

const pluginOptions = [
  {value: 'models', label: 'Models'},
  {value: 'validate-models', label: 'Validate Models'},
  {value: 'raw-fetch', label: 'Raw-Fetch'},
  {value: 'serverless-api-base', label: 'Serverless API Base'},
];

export function CodeGenerator({plugin}) {
  const [selectedPlugin, setSelectedPlugin] = useState(plugin || null);
  const [graphQLCode, setGraphQLCode] = useState(`type User @controller(path: "user") {
  login(request: LoginRequest!): LoginResponse!
    @request(method: POST, path: "login")
}

type LoginRequest @model {
  userType: UserTypes!
  username: String!
}
type LoginResponse @model {
  authorized: Boolean!
  jwt: String!
}
enum UserTypes @model{
  admin, 
  user
}
`);

  const [typescriptCode, setTypescriptCode] = useState('var x=12;');

  useEffect(() => {
    try {
      const plugins = [];
      switch (selectedPlugin) {
        case 'raw-fetch':
          plugins.push({name: '@sdr/raw-fetch', method: 'index', body: {plugin: rawFetchPlugin}});
          break;
        case 'models':
          plugins.push({name: '@sdr/models', method: 'index', body: {plugin: modelsPlugin}});
          break;
        case 'serverless-api-base':
          plugins.push({name: '@sdr/serverless-api-base', method: 'index', body: {plugin: classesPlugin}});
          plugins.push({name: '@sdr/serverless-api-base', method: 'index', body: {plugin: handlersPlugin}});
          plugins.push({name: '@sdr/models', method: 'index', body: {plugin: modelsPlugin}});
          break;
        case 'validate-models':
          plugins.push({name: '@sdr/validate-models', method: 'index', body: {plugin: validateModelsPlugin}});
          break;
        default:
          setTypescriptCode('Select a plugin above');
          return;
      }

      let output = processPlugin(`${controllerSchema}\r\n${graphQLCode}`, plugins, {config: {}}, true, {
        tabWidth: 2,
        singleQuote: true,
        printWidth: 120,
        bracketSpacing: false,
        trailingComma: 'es5',
        jsxBracketSameLine: true,
      });
      setTypescriptCode(output);
    } catch (ex) {
      setTypescriptCode(ex.toString());
    }
  }, [graphQLCode, selectedPlugin]);

  return (
    <>
      {!plugin && (
        <div>
          <Select
            style={{width: '100%'}}
            value={pluginOptions.find(a => a.value === selectedPlugin)}
            onChange={e => {
              setSelectedPlugin(e.value);
            }}
            options={pluginOptions}
            placeholder={'Select Plugin'}
          />
        </div>
      )}
      <div className={'rowIfScreen'}>
        <div style={{flex: 1}}>
          <div className={'code-header'}>GraphQL Schema</div>
          <ControlledEditor
            height="50vh"
            theme={'dark'}
            language={'graphql'}
            value={graphQLCode}
            onChange={(ev, value) => setGraphQLCode(value)}
            options={{minimap: {enabled: false}}}
          />
        </div>
        <div style={{flex: 1}}>
          <div className={'code-header'}>Generated Code</div>
          <ControlledEditor
            height="50vh"
            theme={'dark'}
            language={'typescript'}
            value={typescriptCode}
            options={{readOnly: true, minimap: {enabled: false}}}
          />
        </div>
      </div>
    </>
  );
}
