import Store from 'beedle'

import { mergeConfig } from './config/merge-config'
import { Config } from './config/config.types'
import { makeElementActive } from './lib/makeElementActive'
import { removeClassFromElements } from './lib/removeClassFromElements'
import { actions, mutations } from './core/app.state'
import { initApplicationState } from './core/init-application-state'

class MegaMenu {
  constructor(userSetConfig: Config) {
    const config: Config = mergeConfig(userSetConfig)

    const appStore = new Store({
      actions,
      mutations,
      initialState: initApplicationState(config)
    })

    // wrap the entire application to make it listen for changes to state
    appStore.subscribe(state => {
      console.log(state)
      const menuElements = document.querySelectorAll(
        `[class^=${config.menuItemClass}]`
      )

      menuElements.forEach((el: HTMLElement) => {
        el.addEventListener('mouseenter', event => {
          removeClassFromElements(menuElements, 'active')
          makeElementActive(el)
        })

        el.addEventListener('mouseleave', () => {
          removeClassFromElements(menuElements, 'active')
        })
      })
    })

    // activate state
    appStore.dispatch('activateState', '')
  }
}

module.exports = MegaMenu
