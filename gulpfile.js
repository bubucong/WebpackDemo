/**
 * Created by lsc on 2016/7/19.
 */

//引入gulp组件
var gulp = require('gulp'),
    argv = require('yargs').argv,
    fs = require('fs'),
    fse = require('fs-extra'),
    path = require('path');
//引入webpack组件
var webpack = require("webpack"),
    //webpack css抽取插件
    ExtractTextPlugin = require("extract-text-webpack-plugin");
//一些配置参数
var isWatch = true;
var isProduct = false;
var project = 'GulpWebpack';
//gulp的默认任务
gulp.task('default', function() {
    isProduct = argv.product;
    isWatch = !isProduct;
    console.log('正在处理：' + (isProduct ? '线上' : '本地') + '环境');
    fse.emptydirSync('./dist');
    gulp.start('webpack');
});
//gulp-webpack任务
gulp.task("webpack",function(callback){
    var webpack = require("webpack");

});