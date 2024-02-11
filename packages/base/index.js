module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "plugin:prettier/recommended",
    "standard"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-inline-comments": "error",
    "no-irregular-whitespace": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-console": "error",
    "no-control-regex": "warn",
    "curly": ["error", "all"],
    "space-before-function-paren": "off",
    // Idents are controlled by prettier
    "indent": "off",
    // Comma dangle is controlled by prettier
    "comma-dangle": "off",
    "generator-star-spacing": ["error", "after"],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-readonly": ["error", { "onlyInlineLambdas": true }],
    "@typescript-eslint/return-await": ["error", "always"]
  }
}
