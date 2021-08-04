module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@Constants': './src/constants',
            '@Containers': './src/containers',
            '@Errors': './src/errors',
            '@Functions': './src/functions',
            '@Layouts': './src/layouts',
            '@Pages': './src/pages',
            '@Services': './src/services',
            '@Store': './src/store',
            '@Styles': './src/styles',
            '@Utils': './src/utils',
            '@Assets': './assets',
            '@Fonts': './assets/fonts',
          },
        },
      ],
    ],
  };
};
