module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // CRA wraps all rules in a oneOf array — we must insert before the
      // catch-all file-loader (last entry) or raw-loader never runs.
      const oneOf = webpackConfig.module.rules.find((r) => r.oneOf);
      if (oneOf) {
        oneOf.oneOf.splice(oneOf.oneOf.length - 1, 0, {
          test: /\.md$/,
          use: 'raw-loader',
        });
      }
      return webpackConfig;
    },
  },
};
