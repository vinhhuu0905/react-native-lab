module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@app': './src',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@components': './src/components',
        },
      },
    ],
  ],
};
