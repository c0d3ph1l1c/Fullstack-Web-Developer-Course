const path = require('path');

module.exports = function(env, argv) {
  env = env || {};

  return {
    entry: './src/index',
    module: {
      rules: [{
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm'
      }
    },
    ...env.development? require('./config/webpack.development') : require('./config/webpack.production')
  };
}