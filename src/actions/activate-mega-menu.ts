import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { toggleMenuHover } from './toggle-menu-hover'

export const activateMegaMenu = config => {
  toggleMenuHover(config.menuDropClass, config.menuItemClass, true)
  toggleVisibilityOfNormalMenu(config.overrideMenuClass, false)
}
