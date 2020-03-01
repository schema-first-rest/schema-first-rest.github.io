---
id: installation
title: Installation
sidebar_label: Installation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Add the SDR CLI to your global node_modules


<Tabs
  defaultValue="yarn"
  values={[
    { label: 'Yarn', value: 'yarn', },
    { label: 'npm', value: 'npm', }
  ]
}>
<TabItem value="yarn">

```bash
yarn global add @sdr/cli 
```

</TabItem>
<TabItem value="npm">

```bash
npm install -g @sdr/cli 
```

</TabItem>
</Tabs>

You can now run `sdr` from your projects root to create your config file.

```bash
sdr init
```
