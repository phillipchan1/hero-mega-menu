import { getSiblings } from '../lib/get-siblings-of-element'

export const init = (menuItemClass: string, overrideMenuClass: string) => {
  const menuItems = document.querySelectorAll(`[class^=${menuItemClass}]`)
  console.log('TCL: init -> menuItems', menuItems)

  menuItems.forEach((menuItem: HTMLElement) => {
    const parent = menuItem.parentElement
    const siblings = getSiblings(parent)

    const respectiveDropdown = siblings.find((el: HTMLElement) => {
      return el.className === overrideMenuClass
    })

    respectiveDropdown.style.display = 'none'
  })
}
