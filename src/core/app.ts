import * as _ from 'lodash'
import * as debounce from 'lodash/debounce'

import { getStore } from '../core/init-application-state'
import { Config } from '../config/config.types'
import { attachMegaMenuEventListeners } from '../actions/attach-mega-menu-event-listeners'

import { onResize } from '../actions/on-resize'
import { isMobile } from '../lib/is-mobile'
import { deactivateMegaMenu } from '../actions/deativate-mega-menu'
import { init } from '../actions/init'
import { toggleMenuHover } from '../actions/toggle-menu-hover'
import { activateMegaMenu } from '../actions/activate-mega-menu'

export const initApp = (config: Config) => {
  const store = getStore(config)

  const menuElements = document.querySelectorAll(
    `[class^=${config.menuItemClass}]`
  )

  const menuDrops = document.querySelectorAll(`.${config.menuDropClass}`)

  if (config.debugMode) {
    console.log(`TCL: initApp -> menuDrops`, menuDrops)
    console.log(`TCL: initApp -> menuElements`, menuElements)
  }

  if (_.isEmpty(menuElements) || _.isEmpty(menuDrops)) {
    if (config.debugMode) {
      console.log(
        'No active menu elements or drops: cancelling initiation of menu'
      )
    }
    return
  }

  if (config.debugMode) {
    console.log('Menu drop and element present: initiating mega menu')
  }

  init(
    config.menuItemClass,
    config.overrideMenuClass,
    config.overrideMenuParentClass,
    config.menuDropClass
  )

  attachMegaMenuEventListeners(menuElements, config)

  store.subscribe(state => {
    if (state.debugMode) {
      console.log(`Updated state`, state)
    }

    // determine whether it should be active on mobile or not
    if (!state.megaMenuActive || isMobile(state.mobileViewport)) {
      console.log('deactivating')
      deactivateMegaMenu(config)
      return
    } else {
      console.log('activating')
      activateMegaMenu(config)
    }

    window.addEventListener(
      'resize',
      debounce(() => {
        onResize(state, store)
      }, 300)
    )

    // deactivate mega menu on scroll
    window.addEventListener('scroll', () => {
      // toggleMenuHover(config.menuDropClass, config.menuItemClass, false)
    })
  })

  store.dispatch('activateState', '')
}
