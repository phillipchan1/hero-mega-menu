import * as debounce from 'lodash/debounce'

import { getStore } from '../core/init-application-state'
import { Config } from '../config/config.types'
import { attachMegaMenuEventListeners } from '../actions/attach-mega-menu-event-listeners'

import { onResize } from '../actions/on-resize'
export const initApp = (config: Config) => {
  const store = getStore(config)

  store.subscribe(state => {
    console.log(`TCL: initApp -> state`, state)

    if (!state.megaMenuActive) {
      return
    }

    const menuElements = document.querySelectorAll(
      `[class^=${config.menuItemClass}]`
    )

    attachMegaMenuEventListeners(menuElements, state)

    window.addEventListener(
      'resize',
      debounce(() => {
        if (window.innerWidth < state.mobileViewport) {
          console.log('in mobile')
          store.dispatch('setMegaMenuStatus', false)
        } else {
          store.dispatch('setMegaMenuStatus', true)
        }
      }, 300)
    )
  })

  store.dispatch('activateState', '')
}
