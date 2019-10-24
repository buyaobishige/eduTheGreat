module.exports = {
  publicPath: "/eduTheGreat",
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#68be8d" },
        rules: [
          {
            test: /\.less$/,
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    }
  }
};
