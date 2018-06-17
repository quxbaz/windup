/* eslint-disable */

require('es6-promise').polyfill()

var path = require('path')
var webpack = require('webpack')

var config = {

  mode: 'development',
  cache: true,
  devtool: 'eval-source-map',
  entry: [
    // 'regenerator-runtime/runtime',
    path.resolve(__dirname, 'index'),
  ],

  node: {
    fs: 'empty',
  },

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'index'),
          path.resolve(__dirname, 'src'),
          // path.resolve(__dirname, 'lib'),
          // path.resolve(__dirname, 'config'),
          // path.resolve(__dirname, 'tests'),
        ],
        query: {
          presets: ['es2015'],
          // presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread',
            // 'transform-class-properties',
            // 'syntax-trailing-function-commas',
            // 'add-module-exports',
            // 'transform-export-extensions',
            // 'transform-async-to-generator',
            // 'transform-regenerator',
            // 'transform-function-bind',
            // 'transform-do-expressions',
          ],
        },
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader',
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]',
      //   },
      // },
    ],
  },

  plugins: [
    // new webpack.DllReferencePlugin({
    //   context: '.',
    //   manifest: require(path.resolve(__dirname, 'build/vendor-manifest.json')),
    // }),
    // new webpack.DefinePlugin({
    //   // 'IS_HOT': process.env.IS_HOT === 'true',
    //   'ENV': JSON.stringify(process.env.ENV),
    // }),
  ],

  // resolve: {
  //   // root: path.resolve(__dirname),
  //   // extensions: ['', '.js'],
  //   // alias: {
  //   //   'windup': path.resolve(__dirname),
  //   //   // 'qux': 'qux/lib',
  //   // },
  // },

}

// if (process.env.NODE_ENV === 'test') {

//   // Change entry point from index.js to tests/ or a entry point
//   // parameter
//   if (process.env.entry) {
//     config.entry[1] = path.resolve(process.env.entry)
//   } else {
//     config.entry[1] = path.resolve('tests/')
//   }

// } else if (process.env.NODE_ENV === 'production') {

//   Object.assign(config, {

//     cache: undefined,
//     devtool: undefined,

//     output: {
//       path: 'build',
//       filename: 'bundle.min.js',
//     },

//     // DLL plugin is not necessary in production builds
//     plugins: [
//       new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
//       new webpack.optimize.DedupePlugin(),
//       new webpack.optimize.AggressiveMergingPlugin(),
//       new webpack.optimize.UglifyJsPlugin(),
//       // , new webpack.optimize.OccurrenceOrderPlugin(),
//     ],

//   })

// }

module.exports = config
