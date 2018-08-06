var path = require("path");
var htmlwebpackplugin = require("html-webpack-plugin");

const dev = Boolean(process.env.WEBPACK_SERVE);

module.exports = {
    entry:{  
        index:["./src/index.js"]
        // test:["./src/test.js"]

    },
    output:{
        path:path.resolve(__dirname, 'dist'), 
        // filename: "js/[name]-[chunkhash].js",
        filename: "js/[name].bundle.js"
    },
    module:{
        rules:[
               {
                   test: /\.js$/,
                   exclude: path.resolve(__dirname, "node_modules"),
                   include: path.resolve(__dirname,"src"),
                   loader: "babel-loader",
                   query:{  //babel参数配置
                       "presets": ["env","react"]
                   }
               },
               {
                   test:/\.css$/,
                   loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
               },
               {
                   test:/\.scss$/,
                   loader: 'style-loader!css-loader!postcss-loader!sass-loader'
               },
               {
                   test:/\.html$/,
                   loader:'html-loader'
               },
               {
                   test:/\.(jpg|png|gif|svg|flac)$/i,
                   loader:'url-loader',
                   query:{
                       limit:20000,
                       name:'[name]-[hash:5].[ext]',
                       outputPath: 'images/'
                   }
               }
        ]
    },
    plugins:[     
        new htmlwebpackplugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'],
            // chunks:['test'],
        }),
    ],
    mode: 'production',
    stats: {
        colors: true,
        assets: false,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        overlay: true 
    },
}