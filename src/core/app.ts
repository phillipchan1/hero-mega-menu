import * as debounce from 'lodash/debounce'

import { getStore } from '../core/init-application-state'
import { Config } from '../config/config.types'
import { attachMegaMenuEventListeners } from '../actions/attach-mega-menu-event-listeners'

import { onResize } from '../actions/on-resize'
import { isMobile } from '../lib/is-mobile'
import { toggleVisibilityOfNormalMenu } from '../actions/toggle-visibility-of-normal-menu'
import { removeClassFromElements } from '../lib/remove-class-from-elements'

export const initApp = (config: Config) => {
  const store = getStore(config)

  store.subscribe(state => {
    if (state.debugMode) {
      console.log(`Updated state`, state)
    }

    // determine whether it should be active on mobile or not
    window.addEventListener(
      'resize',
      debounce(() => {
        onResize(state, store)
      }, 300)
    )

    if (!state.megaMenuActive || isMobile(state.mobileViewport)) {
      return
    }

    const menuElements = document.querySelectorAll(
      `[class^=${config.menuItemClass}]`
    )

    attachMegaMenuEventListeners(menuElements, state)

    // deactivate mega menu on scroll
    window.addEventListener('scroll', () => {
      toggleVisibilityOfNormalMenu(state.overrideMenuClass, true)
      removeClassFromElements(menuElements, 'active')
    })
  })

  store.dispatch('activateState', '')
}
