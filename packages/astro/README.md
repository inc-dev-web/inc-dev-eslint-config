# Inc-Dev Astro ESlint config

## Installation instructions

Install packages:

```bash
yarn add --dev eslint @inc-dev/eslint-config-astro
```

Create `.eslintrc.cjs`:

```js
module.exports = {
  extends: ['@inc-dev/eslint-config-astro'],
  parserOptions: {
    project: require.resolve('./tsconfig.json')
  }
}
```

## VSCode fix

Create file `.vscode/settings.json`:

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown",
    "astro"
  ]
}
```

This will enable VSCode ESlint for astro files (is not enabled by default)