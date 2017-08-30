const path = require("path");
module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    modules: ['node_modules']
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader']
      }
    ]
  },
	node: {
		fs: "empty",
    child_process: "empty"
	}
};