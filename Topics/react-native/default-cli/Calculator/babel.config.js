module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
          '@Assets': './src/assets',
          '@Images': './src/assets/images',
          '@Fonts': './src/assets/fonts',
        },
      },
    ],
  ],
};
