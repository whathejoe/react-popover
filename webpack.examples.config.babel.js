import Bootstrap from 'bootstrap-webpack-plugin'
import Path from 'path'



let path = Path.join.bind(null, __dirname)
var outputDirName = 'build'
let outputDir = path(outputDirName)
let indexEntry = ['./examples/basic/index.js']
let jsLoaders = ['babel']

export default {
  entry: {
    index: indexEntry
  },
  output: {
    path: outputDir,
    publicPath: `/react-popover/${outputDirName}/`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: jsLoaders },
      { test: /\.css$/, exclude: /node_modules/, loaders: [ 'style', 'css' ]}
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: outputDir
  },
  plugins: [Bootstrap({})]
}
