import Bootstrap from 'bootstrap-webpack-plugin'
import Path from 'path'



const path = Path.join.bind(null, __dirname)
const outputDirName = `build`
const outputDir = path(outputDirName)



export default {
  entry: {
    basic: `./examples/basic/index.js`,
    multipleTriggers: `./examples/multiple-triggers/main.js`,
  },
  output: {
    path: outputDir,
    publicPath: `/react-popover/${outputDirName}/`,
    filename: `[name].js`,
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      { test: /\.css$/, exclude: /node_modules/, loaders: [ `style`, `css` ]},
    ],
  },
  devtool: `source-map`,
  plugins: [Bootstrap({})],
}
