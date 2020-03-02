import { getClosestParent } from '../lib/get-closest-parent'
import { toggleMenuHover } from '../actions/toggle-menu-hover'

export const init = (
  menuItemClass: string,
  overrideMenuClass: string,
  overrideMenuParentClass: string,
  menuDropClass: string
) => {
  const menuItems = document.querySelectorAll(`[class^=${menuItemClass}]`)

  //  hide override menu
  menuItems.forEach((menuItem: HTMLElement, i: number) => {
    const closestOverrideParentMenu = getClosestParent(
      menuItem,
      `.${overrideMenuParentClass}`
    )

    if (!closestOverrideParentMenu) {
      return
    }

    const respectiveDropdown: HTMLElement = closestOverrideParentMenu.querySelector(
      `.${overrideMenuClass}`
    )

    if (respectiveDropdown) {
      respectiveDropdown.style.display = 'none'
    }

    // clone mega menu and place it underneath
    const megaMenu = document.querySelector(`.${menuDropClass}-${i + 1}`)

    if (!megaMenu) {
      return
    }

    const megaMenuClone = megaMenu.cloneNode(true)

    menuItem.append(megaMenuClone)
  })

  toggleMenuHover(menuDropClass, menuItemClass, true)
}
