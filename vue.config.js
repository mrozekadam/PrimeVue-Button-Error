const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Nový výrobní dashboard'
    }
  },

  configureWebpack: config => {
    config.stats = "none";
    config.performance = {
      hints: false
    };
  },

})
