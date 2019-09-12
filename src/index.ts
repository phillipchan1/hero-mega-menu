import Store from 'beedle'

import { mergeConfig } from './config/merge-config'
import { Config } from './config/config.types'
import { initApp } from './core/app'

class MegaMenu {
  constructor(userSetConfig: Config) {
    const config = mergeConfig(userSetConfig)

    if (config.debugMode) {
      console.log(`TCL: constructor -> config`, config)
    }

    initApp(config)
  }
}

module.exports = MegaMenu
