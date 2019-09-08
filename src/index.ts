import { mergeConfig } from './config/merge-config'
import { Config } from './config/config.types'

class MegaMenu {
  constructor(userSetConfig: Config) {
    const config: Config = mergeConfig(userSetConfig)

    const menuElements = document.querySelectorAll(
      `[class^=${config.menuItemClass}]`
    )

    menuElements.forEach((el: HTMLElement) => {
      el.addEventListener('mouseenter', () => {
        console.log('entered')
      })

      el.addEventListener('mouseleave', () => {
        console.log('left')
      })
    })
  }
}

module.exports = MegaMenu
