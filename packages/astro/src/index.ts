import { extendConfig as extendBaseConfig } from '@inc-dev/eslint-config'
import pluginAstro from 'eslint-plugin-astro'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'

export const ownConfig = [
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    files: ['**/*.{jsx,tsx,astro}'],
  },
  pluginAstro.configs['flat/recommended'],
  pluginAstro.configs['flat/jsx-a11y-recommended'].map(
    (config) => {
      delete config?.plugins?.['jsx-a11y']
      return config
    },
  ),
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            props: true,
            'Props': true,
          },
        },
      ] as any,
    }
  }
]

export const extendConfig: typeof extendBaseConfig = (...configs) => extendBaseConfig(
  ownConfig,
  configs
)

export default extendConfig()