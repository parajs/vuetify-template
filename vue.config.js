const path = require("path");
const name = process.env.VUE_APP_TITLE;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: "http://api.beehub.paradeum.com",
        //target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        src: resolve("src"),
        layout: resolve("src/layout"),
        views: resolve("src/views"),
        utils: resolve("src/utils"),
        components: resolve("src/components"),
        icons: resolve("src/icons"),
        api: resolve("src/api"),
        assets: resolve("src/assets"),
        store: resolve("src/store")
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete("preload"); // delete preload plugin
    config.plugins.delete("prefetch"); // delete prefetch plugin

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },
  transpileDependencies: ["vuetify"]
};
