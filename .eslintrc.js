module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 120,
      },
    ],
  },
}
