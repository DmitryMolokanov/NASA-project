/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressPlugin = require('progress-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src", 'index.tsx'),
    devServer: {
        static: './dist',
        historyApiFallback: true
    },
    module: {
        rules: [
            // ts
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            //css
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            esModule: false,

                            modules: {
                                namedExport: false,
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            //img
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new ProgressPlugin(true),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/locales', to: 'locales' },
            ],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'dist.js'
    },
}