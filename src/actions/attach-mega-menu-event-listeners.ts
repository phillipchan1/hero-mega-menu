import { addBridgeBetweenDropAndMenu } from './add-bridge-between-drop-and-menu'
import { removeBridgeBetweenDropAndMenu } from './remove-bridge-between-drop-and-menu'
import { getVerticalDistanceBetweenTwoElements } from '../lib/get-vertical-distance-between-two-elements'

export const attachMegaMenuEventListeners = (
  menuItems: NodeListOf<Element>,
  config: any
): void => {
  const menuDrops = document.querySelectorAll(`.${config.menuDropClass}`)

  const distanceBetweenMenuItemAndDrop = getVerticalDistanceBetweenTwoElements(
    menuItems[0],
    menuDrops[0]
  )

  menuItems.forEach((menuItem: HTMLElement) => {
    const menuItemClassName = menuItem.className

    menuItem.addEventListener(
      'mouseenter',
      () => {
        addBridgeBetweenDropAndMenu(
          config.menuDropClass,
          distanceBetweenMenuItemAndDrop,
          config.menuItemClass
        )
      },
      true
    )

    menuItem.addEventListener(
      'mouseleave',
      event => {
        removeBridgeBetweenDropAndMenu()
      },
      true
    )
  })
}
