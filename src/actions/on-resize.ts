import { isMobile } from '../lib/is-mobile'

export const onResize = (state, store) => {
  if (isMobile(state.mobileViewport)) {
    if (state.debugMode) {
      console.log('in mobile')
    }
    store.dispatch('setMegaMenuStatus', false)
  } else {
    store.dispatch('setMegaMenuStatus', true)
  }
}
