const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // endees compile hiine gj zaaj ogjiin
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "docs"),
  },
  // dev serveriin tohirgooo
  devServer: {
    contentBase: "./docs",
  },
  plugins: [
    //new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html", // eniig uusgeed distruu gesen ug
      template: "/src/index.html", // eniig ashiglaad
    }),
  ],
  //babeliin tohirgoo
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
