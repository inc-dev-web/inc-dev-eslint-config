import { extendConfig as extendBaseConfig } from '@inc-dev/eslint-config'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export const ownConfig = [
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs['recommended-latest']
]

export const extendConfig: typeof extendBaseConfig = (...configs) => extendBaseConfig(
  ownConfig,
  configs,
)

export default extendConfig()