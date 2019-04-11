const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
   
    /* modules */
    module: {

        
        /*loaders */
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader'
                ]
            },
           { 
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jp?g|gif|ico)$/,
                use: [
                    "file-loader?limit=8000&name=images/[name].[ext]"
                ]
            },
            {
                test: /\.mp4$/,
                use: [
                    "file-loader?name=videos/[name].[ext]"
                ]
            },
        ]
    },

    /* plugins */
    plugins: [
        new HtmlWebpackPlugin ( {
            template: './src/index.html',
            filename: './index.html',
            hash: true,
        }),
        new MiniCssExtractPlugin ( {
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],

    
    /* black overlay with error message */
    devServer: {
        overlay: true,
        historyApiFallback: true
    },

    /* sourcemap */
    devtool: 'eval-sourcemap'

};

module.exports = (env, options) => {
    let production = options.mode === 'production';


    conf.devtool = production
                    ? false
                    : 'eval-sourcemap';
    
    return conf;
};

