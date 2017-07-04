const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: ['./stylesheet/main.scss', './Main.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            //ESLint
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     loader: "eslint-loader"
            // },
            /*{
                test: /\.ejs$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ejs-html-loader',
            },*/
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
                //load .babelrc for react with Preact
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    //postcss load postcss.config.js
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false //disable module path for background (publicPath is important)
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            //load postcss.config.js with options plugins
                            options: {
                                sourceMap: 'inline'
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        alias: {
            
        },
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.scss'
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        host: 'localhost',
        port: 3000,
        https: false,
        historyApiFallback: true,
        // proxy: {
        //     "/": "http://localhost:1112/"
        // },
        open: true
    },
    plugins: [
        new PrettierPlugin({
            // Specify the length of line that the printer will wrap on.
            printWidth: 80, // int

            // Specify the number of spaces per indentation-level.
            tabWidth: 2, // int

            // Indent lines with tabs instead of spaces.
            useTabs: false, // bool

            // Print semicolons at the ends of statements.
            semi: true, // bool

            // Use single quotes instead of double quotes.
            singleQuote: false, // bool

            // Print trailing commas wherever possible.
            trailingComma: 'none', // string (none|es5|all)

            // Print spaces between brackets in object literals.
            bracketSpacing: true, // bool

            // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
            jsxBracketSameLine: false, // bool

            // Which parser to use. Valid options are 'flow' and 'babylon'
            //parser: 'babylon', // string (flow|babylon)

            // Which encoding scheme to use on files
            encoding: 'utf-8', // string

            // Which file extensions to process
            extensions: [".js", ".jsx"] // Array<string>
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
            }
        }),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['dist'] }
                //proxy: 'http://localhost:1112/'
            },
            {
                reload: true
            }
        ),
        new CopyWebpackPlugin(
            [
                // Copy directory contents to {output}/to/directory/
                {from: 'index.html'},
                { from: 'img/**/*', to: '/'  },
            ],
            {
                ignore: [
                    
                ],
            }
        )
    ]
};