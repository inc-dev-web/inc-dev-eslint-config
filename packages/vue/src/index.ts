import { extendConfig as extendBaseConfig } from '@inc-dev/eslint-config'
import pluginVue from 'eslint-plugin-vue'

/**
 * This returns the only part that is changed by exactly this config.
 * This can be used in order to combine this config with other configs, for example, for astro (when you may need both react and vue)
 */
export const ownConfig = [
  pluginVue.configs['flat/recommended'],
]

export const extendConfig: typeof extendBaseConfig = (...configs) => {
  return extendBaseConfig(
    ownConfig,
    configs
  )
}

export default extendConfig()