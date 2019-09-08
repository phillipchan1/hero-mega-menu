import { mergeConfig } from './config/merge-config'
import { Config } from './config/config.types'

class MegaMenu {
  constructor(userSetConfig: Config) {
    const config = mergeConfig(userSetConfig)
  }
}

module.exports = MegaMenu
