
// var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var  CleanWebpackPlugin  = require('clean-webpack-plugin');
//var JavaScriptObfuscator = require('webpack-obfuscator');


module.exports = function () {

    var configs = require('./webpack.development.js')();

    for (let i = 0; i < configs.length; i++) {
        var config = configs[i];
        config.devtool = false;

        //if (config.mode == 'node') {
        // if (i == 0) {
        //     config.plugins.push(new CleanWebpackPlugin({
        //         cleanOnceBeforeBuildPatterns: ['**/*']
        //     }));
        // }


       config.plugins.push(new CleanWebpackPlugin());


    }

    return configs;
}