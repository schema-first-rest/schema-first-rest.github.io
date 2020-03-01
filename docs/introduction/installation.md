---
id: installation
title: Installation
sidebar_label: Installation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Add the SFR CLI to your global node_modules


<Tabs
  defaultValue="yarn"
  values={[
    { label: 'Yarn', value: 'yarn', },
    { label: 'npm', value: 'npm', }
  ]
}>
<TabItem value="yarn">

```bash
yarn global add @sfr/cli 
```

</TabItem>
<TabItem value="npm">

```bash
npm install -g @sfr/cli 
```

</TabItem>
</Tabs>

You can now run `sfr` from your projects root to create your config file.

```bash
sfr init
```
