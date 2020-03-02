---
id: cli
title: CLI Commands
---

`sdr init`

Initializes the directory with an [sdr.yaml](../introduction/configuration.md) file.

---

`sdr`

Runs the generator and outputs the files specified

---
`sdr -w`

Watches the schema and runs the generator on change

---

`sdr emit --schema=./base.graphql`

Emits the base graphql for all of your plugins. This is primarily used for better IDE support in your schema files, otherwise it may say it cannot find the directives.

This will also update your [sdr.yaml](../introduction/configuration.md) to ignore this file. If you do not do this, you will get errors about duplicate directives during generation.

| Options  | Description                                  |
| -------- | -------------------------------------------- |
| `schema` | The location you want to emit the graphql to |
