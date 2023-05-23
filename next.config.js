const webpack = require('webpack');
module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "dns": false,
          "net": false,
          "tls": false,
        }
      };
      config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }));
      return config
    },
    env: {
      DATABASE_URL: process.env.DATABASE_URL
    }
  }
}