import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { deactivateMenu } from './deactivate-menu'

export const deactivateInit = (config, menuElements) => {
  deactivateMenu(config.menuDropClass)
  toggleVisibilityOfNormalMenu(config.overrideMenuClass, true)

  // menuElements.forEach(menu => {
  //   menu.removeEventListener('mouseenter')
  //   menu.removeEventListener('moouseleave')
  // })
}
