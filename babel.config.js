module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env',
            path: '.env',
          },
        ],
        'module:react-native-dotenv',
      ],
    },
  },
};
