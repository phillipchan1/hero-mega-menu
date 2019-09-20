import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { deactivateMenu } from './deactivate-menu'

export const deactivateInit = (
  overrideMenuClass: string,
  menuDropClass: string
) => {
  deactivateMenu(menuDropClass)
  toggleVisibilityOfNormalMenu(overrideMenuClass, true)
}
