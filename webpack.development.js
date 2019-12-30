var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var { VueLoaderPlugin } = require('vue-loader')
var nodeExternals = require('webpack-node-externals');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function (env) {
  return [

    // client 

    {
      mode: 'development',
      entry: {
        'www/app': './src/www/app.js',
        

      },
      output: {
        path: path.join(__dirname, './dist'),
        //filename: '[name].[hash:8].js',
        filename: '[name]/js/app.js',
        publicPath: '/',
        //chunkFilename: '[name]-chunk.js',
        //sourceMapFilename: '[name].map'
      },
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                //presets: ['es2015', "stage-2"],
                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                // the "scss" and "sass" values for the lang attribute to the right configs here.
                // other preprocessors should work out of the box, no loader config like this nessessary.
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
              },
              // other vue-loader options go here
            }
          },

          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: file => (
              /node_modules/.test(file) &&
              !/\.vue\.js/.test(file)
            )
          },

          {
            test: /\.s?[ac]ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',

              'sass-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')],



                }
              }
            ],
          },

          {
            test: /\.less$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'less-loader'
            ]
          },

          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      },



      devtool: '#source-map',
      // optimization:{
      //   splitChunks:{chunks: "all"}
      // },

      plugins: [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(
            process.env.NODE_ENV || "development"
          ),
          "process.env.VUE_ENV": '"client"'
        }),


        new HtmlWebpackPlugin({
          filename: 'views/www/index.html',
          template: 'src/www/index.html',
          hash: true,
          // chunks: ['www'],
          minify: {
            collapseWhitespace: true,
            preserveLineBreaks: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true
          }

        }),


        new HtmlWebpackExternalsPlugin({
          // hash: true,
          externals: [
            {
              module: 'jquery',
              entry: 'https://unpkg.com/jquery@3.4.1/dist/jquery.slim.min.js',
              global: 'jQuery'
            },
            {
              module: 'Popper',
              entry: 'https://unpkg.com/popper.js@1.15.0/dist/umd/popper.min.js'
            },
            {
              module: 'boostrap',
              entry: 'https://unpkg.com/bootstrap@4.3.1/dist/js/bootstrap.min.js'
            },
            {
              module: 'vue',
              global: 'Vue',
              entry: 'https://unpkg.com/vue@2.6.10/dist/vue.min.js'
            },
            {
              module: 'vue-router',
              global: 'VueRouter',
              entry: 'https://unpkg.com/vue-router@3.1.3/dist/vue-router.min.js'
            },

            {
              module: 'vuex',
              global: 'Vuex',
              entry: 'https://unpkg.com/vuex@3.1.2/dist/vuex.min.js'
            },
            {
              module: 'axios',
              global: 'axios',
              entry: 'https://unpkg.com/axios@0.19.0/dist/axios.min.js'
            },
            {
              module: 'lodash',
              global: '_',
              entry: 'https://unpkg.com/lodash@4.17.15/lodash.min.js'
            },

            // {
            //   module: 'moment',
            //   global: 'moment',
            //   entry: 'https://unpkg.com/moment@2.24.0/min/moment.min.js'
            // },

            // {
            //   module: 'vue-moment',
            //   // global: 'moment',
            //   entry: 'https://unpkg.com/vue-moment@4.0.0/dist/vue-moment.min.js'
            // },



            // {
            //   module: 'vee-validate',
            //   global: 'VeeValidate',
            //   entry: 'https://unpkg.com/vee-validate@3.0.8/dist/vee-validate.full.min.js'
            // },

            // {
            //   module: 'vue-meta',
            //   entry: 'https://unpkg.com/vue-meta@2.3.0/dist/vue-meta.min.js'
            // },

            // {
            //   module: 'markdown-it',
            //   global: 'markdownit',
            //   entry: 'https://unpkg.com/markdown-it@10.0.0/dist/markdown-it.min.js'
            // },

            // {
            //   module: 'vue-content-loader',
            //   entry: 'https://unpkg.com/vue-content-loader@0.2.2/dist/vue-content-loader.min.js'
            // },
            // {
            //   module: 'vue-infinite-loading',
            //   entry: 'https://unpkg.com/vue-infinite-loading@2.4.4/dist/vue-infinite-loading.js'
            // },


            // {
            //   module: 'vue-simple-suggest',
            //   entry: 'https://unpkg.com/vue-simple-suggest@1.9.6/dist/umd.js'
            // },

            // {
            //   module: 'v-markdown-editor',
            //   entry: 'https://unpkg.com/v-markdown-editor@1.1.9/dist/v-markdown-editor.min.js'
            // },

            // {
            //   module: 'sanitize-html',
            //   entry: 'https://unpkg.com/sanitize-html@1.20.1/dist/sanitize-html.min.js'
            // },


          ]
        }),




        new MiniCssExtractPlugin({
          filename: '[name]/css/app.css',
          allChunks: true
        }),


        new VueLoaderPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),


      ],


    },

    ///----------------------------
    {

      mode: 'none',
      target: 'node',
      devtool: '#source-map',
      node: {
        __dirname: true,
        __filename: true,
      },
      entry: {

        'app': './src/server/app.js',       
        // 'ws': './src/server/ws.js',
        // 'mailer': './src/server/mailer.js',


      },
      output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',

      },
      module: {
        rules: [


          {
            test: /\.js$/,
            loader: 'babel-loader',
            //exclude: /node_modules/
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
            query: {
              minimize: true
            }
          },


        ]
      },
      //externals: [/^(?!\.|\/).+/i,],
      externals: [nodeExternals()],
      plugins: [
        new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
        }),

        new CopyWebpackPlugin([
          // {
          //   // context: 'src/www/favicon',
          //   from: 'src/www/favicon',
          //   to: './www/favicon'
          // },

          // {
          //   context: 'src/www/media',
          //   from: '**/*',
          //   to: './www/media'
          // },

          {
            context: 'src/server/views',
            from: '**/*.html',
            // from: 'src/server/html/*.htm',
            to: './views'
          },

          {
            // context: 'src/server/html',
            // from: '**/*.htm',
            from: 'src/www/robots.txt',
            to: './www/robots.txt'
          },
          {
            // context: 'src/server/html',
            // from: '**/*.htm',
            from: 'src/www/sitemap.xml',
            to: './www/sitemap/index.xml'
          },


        ]),


      ]
    },


  ]
}
