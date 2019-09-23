import { removeClassFromElements } from '../lib/remove-class-from-elements'

import { activateRespectiveMenu } from './activate-respective-menu'

export const activateMenu = (
  menuDrop: HTMLElement,
  menuDropClass: string
): void => {
  document
    .querySelectorAll(`.${menuDropClass}`)
    .forEach((menuDrop: HTMLElement) => {
      menuDrop.classList.remove('active')
    })

  activateRespectiveMenu(menuDrop, menuDropClass)
}
