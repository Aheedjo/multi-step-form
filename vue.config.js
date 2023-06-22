const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";` // Optional: Import your custom SCSS variables
      }
    }
  }
})
