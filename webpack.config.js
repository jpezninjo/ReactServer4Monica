const webpack = require('webpack');
const path = require('path');

let nodeRoot = path.join( __dirname, 'node_modules' );
let PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
     resolve: {
        alias: {
            'socket.io-client': path.join( nodeRoot, 'socket.io-client', 'socket.io.js' )
        }
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ],
        noParse: [ /socket.io-client/ ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
    ],
    target: 'node',
}
