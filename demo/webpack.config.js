// webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Html文件处理

module.exports = {
    entry: {
        Index: './src/modules/index.js'
    },
    output: {
        path: './release', // This is where images & js will go
        //publicPath: 'http://xxx.com/webpack-demo/', // This is used to generate URLs to e.g. images
        publicPath: '', // This is used to generate URLs to e.g. images
        filename: '[name].js',
        chunkFilename: "[id].chunk.js?[hash:8]"
    },
    plugins: [
        /**
         * HTML文件编译，自动引用JS/CSS
         * 
         * filename - 输出文件名，相对路径output.path
         * template - HTML模板，相对配置文件目录
         * chunks - 只包含指定的文件（打包后输出的JS/CSS）,不指定的话，它会包含生成的所有js和css文件
         * excludeChunks - 排除指定的文件（打包后输出的JS/CSS），比如：excludeChunks: ['dev-helper']
         * hash
         */
        new HtmlWebpackPlugin({filename: 'index.html', template: 'src/views/index.html', chunks: [/*'common', */'Index'], hash: true})
    ],

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', // ES6
                exclude: /(node_modules)/
            },
            // CSS,LESS打包进JS
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders

            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 8192 // inline base64 URLs for <=8k images, direct URLs for the rest
                }
            }
        ]
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};
