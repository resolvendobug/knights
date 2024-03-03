const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

/*
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'ec2-54-225-42-82.compute-1.amazonaws.com'
    ],
    public: 'http://ec2-54-225-42-82.compute-1.amazonaws.com:8080'
  }
})
*/