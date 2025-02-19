// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/MY-VUE-PJ/my-portfolio/' : '/',
  // outputDir: "docs",
})

// module.exports = {
//   publicPath: '/MY-VUE-PJ/my-portfolio/',  // GitHub Pages 경로에 맞게 수정
//   transpileDependencies: true
// }