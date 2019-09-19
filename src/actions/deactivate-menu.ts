import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'
import { removeClassFromElements } from '../lib/remove-class-from-elements'

export const deactivateMenu = (
  overrideMenuClass: string,
  menuDropClass: string
) => {
  toggleVisibilityOfNormalMenu(overrideMenuClass, true)

  const megaMenus = document.querySelectorAll(`.${menuDropClass}`)
  removeClassFromElements(megaMenus, 'active')
}
