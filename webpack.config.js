module.exports = {
  entry: "./client/src/react/index.js",
  output: {
    path: __dirname + "/client/public/js",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }
    ]
  }
};
