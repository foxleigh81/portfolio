# Alex Foxleighs Portfolio 2020 edition

> ## WIP!!! Please note: This is a work in progress, the documents below do not yet reflect the actual state of the project

Every few years I updated my portfolio. This is usually in order to show examples of how I use the latest coding tools but it's also a good opportunity to brush up my skills. For example, this will be my first [TypeScript](https://www.typescriptlang.org/) project!

# Monorepo

The project is running in a [Lerna](https://lerna.js.org/) Monorepo as the app has multiple layers and the monorepo is the best way to implement that structure. 

The main packages are as follows (See 'Tooling' for software used in each package):

- `client`: This is the client-side for the site
- `server`: This is the main server for the site
- `query-layer`: This is the GraphQL layer for the site
- `e2e`: This is where the End To End Tests live
- `themes`: This is where the site-wide stylesheets live
- `services`: This is where the cross-package service classes live
- `helpers`: This is where the cross-package helper classes live

# Installation and running

In order to use this app, you will need to have [Yarn](https://yarnpkg.com) installed. Clone the repository and navigate into the root of the project.
Then type `yarn install`.

This will install the dependencies for each package. You can then do the following:

- `yarn start`: Starts everything, the site will be full available
- `yarn start:server`: Only starts the server
- `yarn start:query`: Starts the server and the query layer.
- `yarn test`: Runs all tests
- `yarn test:e2e`: Only runs the end to end tests
- `yarn test:unit`: Only runs the unit tests

> Note: In order to run the end-to-end tests, `yarn start` must be running.

