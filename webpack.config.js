/**
 * Created by lsc on 2016/7/19.
 */
var webpack = require("webpack");
var path = require("path");

module.exports = {
    //webpack打包入口点
    entry:{
        demo1:__dirname+"/src/libs/Demo1.js",
        vendor: ['jquery'] //第三方库
    },
    //webpack打包输出点
    output:{
        path:__dirname+"/dist/libs",
        filename:"[name]_bundle.js"
    },
    module:{
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            {test: /\.jsx?$/,exclude: /node_modules/,loaders: ['babel']},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    resolve:{
        root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        extensions: ['', '.js', '.json', '.scss']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor_bundle.js')//这是妮第三方库打包生成的文件
    ]

}