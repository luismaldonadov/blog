const path = require('path');

module.exports = {
  // Docs folder output in order to use githubpages
  publicPath: process.env.NODE_ENV === 'production' ? '/blog/': '/',
  outputDir: path.resolve('./docs'),
  configureWebpack: {
    resolve: {
      extensions: [
        '.vue',
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `scss/main.scss`
        /* eslint-disable-next-line */
        data: `@import "@/assets/scss/main.scss";`
      },
    },
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
