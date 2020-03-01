---
id: controller
title: Plugin Controller
---

import {CodeGenerator} from '../../src/components/codeGenerator';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The controller plugin is the base for all other included plugins. All plugins mark `@sfr/controller` as an explicit dependency, so it is not neccesary to include it in your configuration file. It defines the following directives.

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
yarn add @sfr/controller
```

</TabItem>
<TabItem value="npm">

```bash
npm install @sfr/controller
```

</TabItem>
</Tabs>

---

## Code Generation

This plugin does not emit any code.

## Directives

`controller`

Add this to your top level types. This is how you group your web requests. Once you decorate your type with this it must only contain methods, not fields. The methods must be decorated with `request`.

| Options | Description                            |
| ------- | -------------------------------------- |
| `path`  | The path for this grouping of requests |

`request`

Add this to the methods within a `controller`. It defines your web requests.

| Options  | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| `path`   | The path for request                                                                 |
| `method` | The REST method for this request. Allowed values are `GET`, `POST`, `PUT`, `DELETE`. |

`model`

Add this to the `types`, `unions`, `enums`, `inputs`, and `interfaces` that you wish to emit `typescript` code for.

## Dependencies

None
