const HtmlWebPackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      
    ]
  },
   // devtool: true,
  plugins: [new webpack.SourceMapDevToolPlugin({
      exclude: /node_modules/,
      columns: true,
      test: /\.jsx?|\.js?$/,
      filename: "[name].js.map",
  }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};