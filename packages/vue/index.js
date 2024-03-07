module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@inc-dev',
    'plugin:vue/vue3-recommended'
  ],
  overrides: [
    {
      files: ['*.vue', '*.jsx', '*.tsx'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue']
      },
      rules: {
        'prettier/prettier': 'off'
      }
    }
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/padding-line-between-blocks': 'error',
    'no-constant-condition': 'warn',
    'no-console': 'off'
  },
}
