
module.exports = {
    entry: './app/index.js',

    output: {
        path: './build/public',
        filename: 'app.js'
    },

    module: {
        loaders: [
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    }
};