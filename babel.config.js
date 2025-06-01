module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: false }],
    ['@babel/plugin-transform-private-methods', { loose: false }],
    ['@babel/plugin-transform-private-property-in-object', { loose: false }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
