import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginUnicorn from 'eslint-plugin-unicorn'

export const extendConfig: typeof tseslint['config'] = (...configs) => {
  return tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
      rules: {
        '@typescript-eslint/require-await': 'off',
      }
    },
    pluginUnicorn.configs.recommended,
    ...configs,
    pluginPrettier,
  )
}

export default extendConfig()