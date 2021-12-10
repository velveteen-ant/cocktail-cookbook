const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    // mode: 'development',

    entry: './src/index.js',


    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    }, 

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
            },
            {
                test: /\.s?css/,
                exclude: /node_modules/,
                use: [
                  'style-loader', 'css-loader', 'sass-loader'
                ],
              },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader',
            //     ],
            // }
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
            // title: 'development',
            template: './src/index.html'
        }),
        // new MiniCssExtractPlugin(),
    ],

    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build'),
        },
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
};