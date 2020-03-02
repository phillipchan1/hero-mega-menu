import { isMobile } from '../lib/is-mobile'
import { deactivateInit } from './deactivate-init'

export const onResize = (state, store) => {
  if (isMobile(state.mobileViewport)) {
    if (state.debugMode) {
      console.log('in mobile')
    }

    deactivateInit(state.overrideMenuClass, state.menuDropClass)
    store.dispatch('setMegaMenuStatus', false)

    return
  }

  if (state.debugMode) {
    console.log('Desktop, setting to active')
  }

  store.dispatch('setMegaMenuStatus', true)
}
