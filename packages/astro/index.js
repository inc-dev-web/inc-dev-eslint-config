module.exports = {
  extends: [
    '@inc-dev',
    'plugin:astro/recommended'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: { }
    }
  ]
}
