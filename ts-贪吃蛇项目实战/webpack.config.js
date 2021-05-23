const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");



module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    //指定打包文件所在的目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        //指定打包后文件所在的目录
        filename: "bundle.js",
        //告诉webpack不使用箭头,
        //告诉webpack不使用const
        environment:{
            arrowFunction:false,
            const:false
        }

    },
    //指定打包时运用的模块
    module: {
        //指定加载的规则
        rules: [{
            test: /\.ts/, //指定规则生效的文件
            use: [
                {
                    loader:"babel-loader",
                    //设置babel
                    options:{
                        //设置预定义的环境
                        presets:[
                            [
                                //指定环境的插件
                                "@babel/preset-env",
                                {
                                    //配置信息
                                    targets:{
                                        "chrome":"88",
                                    },
                                    //指定core.js版本
                                    "corejs":"3",
                                    //使用core.js方式"usage"表示按需加载
                                    "useBuiltIns":"usage"
                                }
                            ]
                        ]
                             
                    }
                    } ,   
                    "ts-loader"
             ],//指定使用的loader
            exclude: /node_module/ //指定排除的文件
        },
        //设置less文件处理
        {
            test:/\.less$/,
            use:[
                // {
                //     loader:"file-loader",
                //     // options:{
                //     //     name:"images/[hash].[ext]",
                //     // }
                // },
                "style-loader",
                "css-loader",
                //引入postcss
                {
                    loader:"postcss-loader" ,
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:"last 2 versions"
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }
      ]
    },
    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        }),
        // new CleanWebpackPlugin()
    ],
    //设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}