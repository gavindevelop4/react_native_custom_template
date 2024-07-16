module.exports = {
  root: true,
  extends: '@react-native',
  // "eslint.workingDirectories": [
  //     { directory: "./client/", changeProcessCWD: true },
  //     { directory: "./server/", changeProcessCWD: true },
  // ],
  rules: {
    semi: [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'template-curly-spacing': [2, 'never'],
    'object-curly-spacing': ['error', 'always'],
  },
};
