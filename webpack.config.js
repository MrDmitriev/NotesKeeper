const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    publicPath: `/`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: [`.js`, `.jsx`],
  },
};
