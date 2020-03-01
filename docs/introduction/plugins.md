---
id: plugins
title: Plugins
sidebar_label: Plugins
---



Plugins were designed to be trivial to create. While you can use our plugins, we encourage you to create your own to fill the needs of your projects use cases. 

Plugins can define schema, typically in the form of directives, as seen in the [@sdr/controller](../plugins/controller.md) plugin. They can also emit code as seen in the [@sdr/raw-fetch](../plugins/raw-fetch.md) plugin.
 
 A plugin is a single ts file that exports a plugin function and a config object:

```typescript
import {PluginConfig, PluginOptions} from '@sdr/core';
export function plugin(options: PluginOptions, config: {baseClientLocation: string}) {
  return options.types.map(action=>`${action.name}`) 
}
export const config: PluginConfig = {
  dependsOn: ['@sdr/controller'],
};
```

`PluginOptions` contains an array of `types`, which are `graphql types` that have at least one directive. Each `type` contains all the declared directives, and all of the fields within it. Your plugins will iterate through these types and emit code as needed.

For complex plugins we recommend using `ejs` as a template language. 
