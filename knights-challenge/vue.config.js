const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

/*
module.exports = {
  devServer: {
    allowedHosts: [
      'ec2-54-225-42-82.compute-1.amazonaws.com'
    ],
    host: '0.0.0.0',
    port: 8080,
  },
}
*/