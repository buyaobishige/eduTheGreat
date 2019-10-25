module.exports = {
  publicPath: "/eduTheGreat",
  devServer: {
    proxy: {
      "/server": {
        target: "http://lin.nenuyouth.com",
        ws: true,
        changeOrigin: true
      }
    }
  },
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
