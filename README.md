# Purpose

This example project has been created just for clarify why there's no way to externalize React from [MaterialUI](https://github.com/callemall/material-ui) using [Webpack](https://github.com/webpack/webpack) with externals.

The project has two builds, each one with its entry point:

- The first one instantiates [MaterialUI](https://github.com/callemall/material-ui) Avatar component. As you can see, React is not included in the bundle.
- The second one instantiates [MaterialUI](https://github.com/callemall/material-ui) RaisedButton component. In this case React is included in the result bundle. 

Both have same webpack config params.

# Usage 

In order to build the first example, working good, execute: npm run build-good
In order to build the second example, working bad, execute: npm run build-bad

You will see the results in dist folder.
