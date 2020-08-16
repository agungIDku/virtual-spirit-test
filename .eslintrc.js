module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _components: './src/components',
          _utils: './src/utils'
        },
      },
    },
  },
};