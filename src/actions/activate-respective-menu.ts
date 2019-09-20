import { getNumberFromClassName } from '../lib/get-number-from-class-name'

export const activateRespectiveMenu = (
  menuDrop: HTMLElement,
  menuDropClass: string
) => {
  const numberOfMenuDrop = getNumberFromClassName(menuDrop.className)
  const respectiveMenuDropClass = `.${menuDropClass}-${numberOfMenuDrop} .${menuDropClass}`

  const menu = document.querySelector(respectiveMenuDropClass)

  if (!menu) {
    return
  }

  menu.classList.add('active')
}
