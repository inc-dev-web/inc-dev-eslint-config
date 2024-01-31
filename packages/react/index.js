module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@inc-dev',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-constant-condition': 'warn',
    'no-console': 'off'
  },
}
