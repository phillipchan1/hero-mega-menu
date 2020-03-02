import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { deactivateMenu } from './deactivate-menu'

export const deactivateMegaMenu = (config, menuElements) => {
  // ! TODO how to actually deactivate?
  toggleVisibilityOfNormalMenu(config.overrideMenuClass, true)
}
