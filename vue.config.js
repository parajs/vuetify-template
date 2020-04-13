const path = require("path");
const name = process.env.VUE_APP_TITLE;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
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
  transpileDependencies: ["vuetify"]
};
