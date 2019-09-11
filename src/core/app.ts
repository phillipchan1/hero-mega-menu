import { makeElementActive } from '../lib/makeElementActive'
import { removeClassFromElements } from '../lib/removeClassFromElements'
import { appStore } from '../core/init-application-state'
import { Config } from '../config/config.types'

export const initApp = (config: Config) => {
  appStore.subscribe(state => {
    if (!state.megaMenuActive) {
      return
    }

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

  appStore.dispatch('activateState', '')
}

// wrap the entire application to make it listen for changes to state
