const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [
                                    autoprefixer(),
                                    cssnano({zindex: false})
                                ]
                            },
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
};
