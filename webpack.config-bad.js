'use strict';

module.exports = {
    entry: './src/app-bad.js',
    output: {
        path: "./dist",
        filename: "app.js"
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}
