const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    // mode: 'development',

    entry: './client/index.js',


    output: {
        path: path.join(__dirname, '/build'),
        // publicPath: '/build',
        filename: 'bundle.js'
    }, 

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules|bower_components/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    },
                },
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                  'style-loader', 'css-loader', 'sass-loader'
                ],
              },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'development',
            template: './client/index.html'
        }),
    ],

    devServer: {
        static: {
            // publicPath: '/build',
            publicPath: '/',
            directory: path.join(__dirname, 'build'),
        },
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // },
    }, 

    // resolve: {
    //     extensions: ['.js', '.jsx']
    //   },
};