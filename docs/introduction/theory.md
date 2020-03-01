---
id: theory
title: Theory
---

Schema Driven: REST (SDR) is a series of tools and plugins that allow you to build your REST APIs using GraphQL schema definitions. 

The magic of SDR is the plugin ecosystem around it. You install the plugins you need to generate code for your projects. Plugins can include both decorators that are used in your schema, and code generators to emit code for your project.

**Important:** There is no GraphQL runtime component of SDR. It simply uses GraphQL as a way of expressing your schema. 

## Example Schema

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

## Inspiration

This project was inspired by the incredible [GraphQL Code Generator](https://graphql-code-generator.com/). If you are in need of solving this problem specifically for GraphQL, this framework provides an unmatched level of support and plugins to do so. 
