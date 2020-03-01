---
id: validate-models
title: Plugin Validate Models
---

import {CodeGenerator} from '../../src/components/codeGenerator';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This plugin is used to generate a series of `typescript` functions that can be used to validate a JSON model. It can be used as a first step to make sure that the JSON sent over the wire matches your schema. 

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
yarn add @sdr/validate-models
```

</TabItem>
<TabItem value="npm">

```bash
npm install @sdr/validate-models
```

</TabItem>
</Tabs>

---

## Code Generation

<CodeGenerator plugin={'validate-models'} />

## Directives

This plugin does not include any directives.

## Dependencies

[@sdr/controller](./controller.md)
