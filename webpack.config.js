const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: {
    index: fs.existsSync(path.join(__dirname, "src", "index.ts"))
      ? "./src/index.ts"
      : "./src/index.js",
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    hashFunction: "xxhash64",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "static"),
      watch: true,
    },
    hot: true,
    host: "localhost",
    port: 8080,
    watchFiles: {
      paths: ["src/**/*", "static/**/*"],
      options: {
        usePolling: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
