import Bootstrap from 'bootstrap-webpack-plugin'
import Path from 'path'



const path = Path.join.bind(null, __dirname)
const outputDirName = `build`
const outputDir = path(outputDirName)
const indexEntry = [`./examples/basic/index.js`]
const jsLoaders = [`babel`]

export default {
  entry: {
    index: indexEntry,
  },
  output: {
    path: outputDir,
    publicPath: `/react-popover/${outputDirName}/`,
    filename: `[name].js`,
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: jsLoaders },
      { test: /\.css$/, exclude: /node_modules/, loaders: [ `style`, `css` ]},
    ],
  },
  devtool: `source-map`,
  plugins: [Bootstrap({})],
}
