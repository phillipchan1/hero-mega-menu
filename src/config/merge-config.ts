import { defaultConfig } from './config.default'
import { Config } from './config.types'
export const mergeConfig = (userSetConfig: Config): Config => {
  return {
    ...defaultConfig,
    ...userSetConfig
  }
}
