const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (argv) => {
  const isProduction = argv.mode === "production";

  const pages = ["404", "registration", "bookmark", "searchProducts"];

  const htmlPlugins = pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: `./src/pages/${page}.html`,
        filename: `${page}.html`,
        chunks: ["main"],
        publicPath: isProduction ? "./" : "/",
      })
  );

  return {
    entry: {
      main: "./src/index.ts",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
      publicPath: isProduction ? "./" : "/",
    },
    mode: argv.mode || "development",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      port: 8080,
      open: false,
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
      alias: {
        "@styles": path.resolve(__dirname, "src/styles"),
        "@components": path.resolve(__dirname, "src/components"),
        "@variables": path.resolve(__dirname, "src/variables"),
        "@utilities": path.resolve(__dirname, "src/utilities"),
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { importLoaders: 1, esModule: false },
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: "asset/resource",
          generator: {
            filename: path.join("icons", "[name].[contenthash][ext]"),
          },
        },
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        publicPath: isProduction ? "./" : "/",
        minify:
          argv.mode === "production"
            ? {
                removeComments: true,
                collapseWhitespace: true,
              }
            : false,
        chunks: ["main"],
      }),
      ...htmlPlugins,
      new MiniCssExtractPlugin({
        filename: "main.[contenthash].css",
      }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
