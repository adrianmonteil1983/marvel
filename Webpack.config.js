const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/marvel/'
    : '/'
  ,
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
      
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
        title: 'toto au marche'
    })
  ]
  // plugin omitted
}