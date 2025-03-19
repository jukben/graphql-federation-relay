const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
      },
    ],
    proxy: {
      // THIS IS THE HIVE GATEWAY
      "/graphql": "http://localhost:4000",
      // Image processing proxy
      "/assets": {
        target: "http://localhost:3003",
        changeOrigin: true,
      },
    },
    port: 3000,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
};
