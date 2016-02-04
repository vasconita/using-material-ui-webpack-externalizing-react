# Purpose

This example project has been created just for clarify why there's no way to externalize [React](https://facebook.github.io/react/) from [MaterialUI](https://github.com/callemall/material-ui) using [Webpack](https://github.com/webpack/webpack) with externals.

The project has two builds, each one with its entry point:

- The first one instantiates [MaterialUI](https://github.com/callemall/material-ui) Avatar component. As you can see, React is not included in the bundle. This is the desired behaviour because in webpack config file React is marked as external.
- The second one instantiates [MaterialUI](https://github.com/callemall/material-ui) RaisedButton component. In this case React is included in the result bundle. This is not correct, in webpack config file React is marked as external.

Both have same webpack config params.

# Usage 

In order to build the first example, working good, execute: 
```sh
npm run build-good
```
In order to build the second example, working bad, execute: npm run build-bad
```sh
npm run build-bad
```

You will see the results in dist folder.

# Why?

It seem Webpack resolver doesn't filter externals inside sources of referenced node packages in node_modules. Probably it makes sense thinking about package name collision.

The problem of second example is it has a reference to react-addons-pure-render-mixin package (that in fact is just a link to react package again). Since this import webpack stop resolving react as external.
