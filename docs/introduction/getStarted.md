---
id: getStarted
title: Get Started
sidebar_label: Get Started
---
## Theory

Schema First: Rest (SFR) is a series of tools that allow you to build your REST APIs using GraphQL schema definitions. 

The magic of SFR is the plugin ecosystem around it. You install the plugins you need to generate code for your projects needs. Plugins decorators that can be used in your schema, and code generators to emit code for your project.


## Example GraphQL

```graphql
type User @controller(path: "user") {
  login(request: LoginRequest!): LoginResponse!
    @request(method: POST, path: "login")
}

type LoginRequest @model {
  username: String!
}
type LoginResponse @model {
  authorized: Boolean!
  jwt: String!
}
```

This block of code uses the [Controller Plugin](../plugins/controller.md) which exposes the `controller`, `request`, and `model` decorators. This plugin does not emit any code in and of itself; it simply provides metadata in the form of decorators to other plugins so they can execute their individual tasks. For instance, the plugins [Raw Fetch Plugin](../plugins/raw-fetch.md) and [Models Plugin](../plugins/models.md) use the metadata to build a typescript file to make requests to your api.

