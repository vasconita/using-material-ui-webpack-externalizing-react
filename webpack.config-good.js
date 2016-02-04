'use strict';

module.exports = {
    entry: './src/app-good.js',
    output: {
        path: "./dist",
        filename: "app.js"
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}
