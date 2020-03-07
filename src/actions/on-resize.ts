import { isMobile } from '../lib/is-mobile'
import { deactivateMegaMenu } from './deativate-mega-menu'

export const onResize = (config, store) => {
  if (isMobile(config.mobileViewport)) {
    if (config.debugMode) {
      console.log('in mobile')
    }

    deactivateMegaMenu(config)
    store.dispatch('setMegaMenuStatus', false)

    return
  }

  if (config.debugMode) {
    console.log('Desktop, setting to active')
  }

  store.dispatch('setMegaMenuStatus', true)
}
