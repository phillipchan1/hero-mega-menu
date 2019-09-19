import { removeClassFromElements } from '../lib/remove-class-from-elements'
import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'

import { activateRespectiveMenu } from './activate-respective-menu'

export const activateMenu = (
  menuDrop: HTMLElement,
  overrideMenuClass: string,
  menuDropClass: string
): void => {
  toggleVisibilityOfNormalMenu(overrideMenuClass, false)

  activateRespectiveMenu(menuDrop, menuDropClass)
}
