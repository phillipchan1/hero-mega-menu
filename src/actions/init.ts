import { getSiblings } from '../lib/get-siblings-of-element'
import { getClosestParent } from '../lib/get-closest-parent'
import { compensateForDistanceBetweenDropAndMenu } from './compensate-for-distance-between-drop-and-menu'

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

  // compensate for distance between menu drop and menu
  compensateForDistanceBetweenDropAndMenu(
    menuDropClass,
    menuItems,
    menuItemClass
  )
}
