import { removeClassFromElements } from '../lib/remove-class-from-elements'

import { activateRespectiveMenu } from './activate-respective-menu'

export const activateMenu = (
  menuDrop: HTMLElement,
  menuDropClass: string
): void => {
  activateRespectiveMenu(menuDrop, menuDropClass)
}
