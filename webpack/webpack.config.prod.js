const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base");

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Extract CSS into a file with suffix .css
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          // Compiles Less to CSS
          "less-loader",
        ]
      },
      {
        test: /\.styl$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
           // Compiles Stylus to CSS
          "stylus-loader",
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};