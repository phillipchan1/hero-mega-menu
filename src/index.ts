import { mergeConfig } from './config/merge-config'
import { Config } from './config/config.types'

import { makeElementActive } from './lib/makeElementActive'
import { removeClassFromElements } from './lib/removeClassFromElements'

class MegaMenu {
  constructor(userSetConfig: Config) {
    const config: Config = mergeConfig(userSetConfig)

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
  }
}

module.exports = MegaMenu
