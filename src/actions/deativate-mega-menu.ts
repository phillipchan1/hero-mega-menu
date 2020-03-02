import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { toggleMenuHover } from './toggle-menu-hover'

export const deactivateMegaMenu = config => {
  toggleMenuHover(config.menuDropClass, config.menuItemClass, false)
  toggleVisibilityOfNormalMenu(config.overrideMenuClass, true)
}
