module.exports = {
  extends: [
    '@inc-dev/eslint-config-react',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}