<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# About NestJS

NestJS POC
**app.controller.ts** -A basic controller with a single route.
**app.controller.spec.ts** -The unit tests for the controller.
**app.module.ts** -The root module of the application.
**app.service.ts** -A basic service with a single method.
**main.ts** -The entry file of the application which uses the core function. NestFactory to create a Nest application instance.

[Documentation | NestJS - A progressive Node.js framework](https://docs.nestjs.com/recipes/crud-generator)

Nest is built around the strong design pattern commonly known as **Dependency injection**

## Controllers

A controller’s purpose is to receive specific requests for the application. The **routing** mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

## Providers

Controllers should handle HTTP requests and delegate more complex tasks to **providers**.
[SOLID - Wikipedia](https://en.wikipedia.org/wiki/SOLID)

**service** is responsible for data storage and retrieval.

## Modules

The **@Module()** decorator provides metadata that **Nest** makes use of to organize the application structure.

Each application has at least one module, a **root module**. The root module is the starting point Nest uses to build the **application graph** - the internal data structure Nest uses to resolve module and provider relationships and dependencies.

Helps to make it impossible to inject providers that are neither directly part of the current module nor exported from the imported modules

## Middleware

Middleware is a function which is called **before** the route handler. Middleware functions have access to the [request](https://expressjs.com/en/4x/api.html#req) and [response](https://expressjs.com/en/4x/api.html#res) objects.

## Exception filters

Nest comes with a built-in **exceptions layer** which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.

## Pipes

Pipes have two typical use cases:

- **transformation**: transform input data to the desired form (e.g., from string to integer)
- **validation**: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect

## Guards

Guards have a **single responsibility**. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time. This is often referred to as **authorization**.

## Interceptors

Interceptors have a set of useful capabilities which are inspired by the [Aspect Oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming) (AOP) technique. They make it possible to:

- bind extra logic before / after method execution
- transform the result returned from a function
- transform the exception thrown from a function
- extend the basic function behavior
- completely override a function depending on specific conditions (e.g., for caching purposes)

## Custom route decorators

In the node.js world, it’s common practice to attach properties to the **request** object. Then you manually extract them in each route handler.
In order to make your code more readable and transparent, you can create a decorator and reuse it across all of your controllers.

## Other functionality

- circular dependency resolving
- lazy load modules
- lifecycle hooks
- platform-agnostic framework (build once, use everywhere)
  - You can use GraphQL as your API layer interchangeably with providing a REST API.
  - [application context](https://docs.nestjs.com/application-context) feature helps to create any kind of Node.js application - including things like CRON jobs and CLI apps - on top of Nest.
- testing:
  - automatically scaffolds default unit tests for components and e2e tests for applications
  - provides default tooling (such as a test runner that builds an isolated module/application loader)
  - provides integration with [Jest](https://github.com/facebook/jest) and [Supertest](https://github.com/visionmedia/supertest) out-of-the-box, while remaining agnostic to testing tools
  - makes the Nest dependency injection system available in the testing environment for easily mocking components
- database agnostic
  - Can use Knex.js: [Build a NestJS Module for Knex.js (or other resource-based libraries) in 5 Minutes - DEV Community](https://dev.to/nestjs/build-a-nestjs-module-for-knex-js-or-other-resource-based-libraries-in-5-minutes-12an)

## Conclusion

The framework itself brings stability to the code structure and helps enforce, what we believe, are good patterns (SRP, clean code, DRY, etc). Nest itself is built on top of Express or Fastify (depending on your adapter) and really just providers a nice dev interface to work with. has built in GraphQL support.
