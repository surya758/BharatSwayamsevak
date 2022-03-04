module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['src'],
  //       alias: {
  //         _assets: './src/assets',
  //         _components: './src/components',
  //         _navigations: './src/navigations',
  //         _context: './src/context',
  //         _utils: './src/utils',
  //         _styles: './src/styles',
  //       },
  //     },
  //   },
  // },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
