import { getClosestParent } from '../lib/get-closest-parent'
import { addBridgeBetweenDropAndMenu } from './add-bridge-between-drop-and-menu'
import { attachMegaMenuEventListeners } from '../actions/attach-mega-menu-event-listeners'

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

  // add styles that will make this work
  const styles = `<style>
    [class^=${menuItemClass}] {
        position: relative
    }


    [class^=${menuItemClass}]:hover .${menuDropClass} {
        display: block !important;
        visibility: visible;
        opacity: 1
    }
  </style>
  `

  const head = document.querySelector('head')
  head.innerHTML += styles
}
