const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const path = require("path")
// const Dotenv = require("dotenv-webpack")
const WebpackShellPlugin = require("webpack-shell-plugin-next")

module.exports = {
  entry: {
    popup: path.resolve("src/popup.tsx"),
    serviceWorker: path.resolve("src/service-worker.ts"),
    contentScript: path.resolve("src/content-script.ts")
  },
  module: {
    rules: [
      { use: "ts-loader", test: /\.tsx?$/, exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer]
              }
            }
          }
        ]
      },
      {
        type: "assets/resource",
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve("src/static"), to: path.resolve("dist") }
        // { from: path.resolve("src/assets/icons"), to: path.resolve("dist") }
      ]
    }),
    // new Dotenv({
    //   systemvars: true
    // }),
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ["npm run update:manifest"],
        blocking: false,
        parallel: true
      }
    }),
    ...getHtmlPlugins(["popup", "options", "newTab"])
  ],
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  optimization: {
    splitChunks: { chunks: "all" }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "Translation using local LLM",
        filename: `${chunk}.html`,
        chunks: [chunk]
      })
  )
}
