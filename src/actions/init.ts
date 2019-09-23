import { getSiblings } from '../lib/get-siblings-of-element'
import { compensateForDistanceBetweenDropAndMenu } from './compensate-for-distance-between-drop-and-menu'

export const init = (
  menuItemClass: string,
  overrideMenuClass: string,
  menuDropClass: string
) => {
  const menuItems = document.querySelectorAll(`[class^=${menuItemClass}]`)

  //  hide override menu
  menuItems.forEach((menuItem: HTMLElement, i: number) => {
    const parent = menuItem.parentElement
    const siblings = getSiblings(parent)

    const respectiveDropdown = siblings.find((el: HTMLElement) => {
      return el.className === overrideMenuClass
    })

    respectiveDropdown.style.display = 'none'

    const megaMenu = document
      .querySelector(`.${menuDropClass}-${i + 1}`)
      .cloneNode(true)
    menuItem.appendChild(megaMenu)
  })

  // compensate for distance between menu drop and menu
  compensateForDistanceBetweenDropAndMenu(
    menuDropClass,
    menuItems,
    menuItemClass
  )
}
