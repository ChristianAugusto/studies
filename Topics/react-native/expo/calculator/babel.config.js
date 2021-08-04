module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@Components': './src/components',
            '@Constants': './src/constants',
            '@Errors': './src/errors',
            '@Functions': './src/functions',
            '@Store': './src/store',
            '@Utils': './src/utils',
            '@Assets': './assets',
            '@Images': './assets/images',
            '@Fonts': './assets/fonts',
          },
        },
      ],
    ],
  };
};
