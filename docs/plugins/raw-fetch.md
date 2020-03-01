---
id: raw-fetch
title: Plugin Raw Fetch
---

import {CodeGenerator} from '../../src/components/codeGenerator';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This plugin is used to generate a type safe class that reflects your graphql requests. It can be used on its own, but it is recommend you [fork it](https://github.com/schema-first-rest/plugin-models/fork) and construct the requests as you see fit for your project.

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
yarn add @sfr/raw-fetch
```

</TabItem>
<TabItem value="npm">

```bash
npm install @sfr/raw-fetch
```

</TabItem>
</Tabs>

---

## Code Generation

<CodeGenerator plugin={'raw-fetch'} />

## Directives

This plugin does not include any directives.

## Dependencies

[@sfr/controller](./controller.md)
