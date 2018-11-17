var HtmlWebpackPlugin = require('html-webpack-plugin');


module.export = {
    entry: './src/app/main.ts',
    resolve: {
        extensions: ['.js','.ts']
    },
    module: {
       rules: [
           {
               test: /\.html$/,
               loaders: ['html-loader']
           },
           {
               test: /\.css#/,
               loaders: ['raw-loader']
           }
       ],
       exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};