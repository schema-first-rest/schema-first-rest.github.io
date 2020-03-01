---
id: models
title: Plugin Models
---

import {CodeGenerator} from '../../src/components/codeGenerator';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This plugin is used to generate a series of `typescript` models to be used in most other plugins. The bulk of the code is from the incredible [GraphQL Code Generator](https://graphql-code-generator.com/) project.

## Install

<Tabs
defaultValue="yarn"
values={[
{ label: 'Yarn', value: 'yarn', },
{ label: 'npm', value: 'npm', }
]
}>
<TabItem value="yarn">

```bash
yarn add @sdr/models
```

</TabItem>
<TabItem value="npm">

```bash
npm install @sdr/models
```

</TabItem>
</Tabs>

---

## Code Generation

<CodeGenerator plugin={'models'} />

## Directives

This plugin does not include any directives.

## Dependencies

[@sdr/controller](./controller.md)
