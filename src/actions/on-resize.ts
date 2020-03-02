import { isMobile } from '../lib/is-mobile'
import { deactivateMegaMenu } from './deactivate-init'

export const onResize = (state, store) => {
  if (isMobile(state.mobileViewport)) {
    if (state.debugMode) {
      console.log('in mobile')
    }

    deactivateMegaMenu(state.overrideMenuClass, state.menuDropClass)
    store.dispatch('setMegaMenuStatus', false)

    return
  }

  if (state.debugMode) {
    console.log('Desktop, setting to active')
  }

  store.dispatch('setMegaMenuStatus', true)
}
