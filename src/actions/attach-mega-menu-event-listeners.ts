import { AppState } from '../core/app.state.types'
import { addBridgeBetweenDropAndMenu } from './add-bridge-between-drop-and-menu'
import { removeBridgeBetweenDropAndMenu } from './remove-bridge-between-drop-and-menu'
import { getVerticalDistanceBetweenTwoElements } from '../lib/get-vertical-distance-between-two-elements'

export const attachMegaMenuEventListeners = (
  menuItems: NodeListOf<Element>,
  state: AppState
): void => {
  const menuDrops = document.querySelectorAll(`.${state.menuDropClass}`)

  const distanceBetweenMenuItemAndDrop = getVerticalDistanceBetweenTwoElements(
    menuItems[0],
    menuDrops[0]
  )

  menuItems.forEach((menuItem: HTMLElement) => {
    const menuItemClassName = menuItem.className

    menuItem.addEventListener(
      'mouseenter',
      () => {
        if (!state.megaMenuActive) {
          return
        }

        addBridgeBetweenDropAndMenu(
          state.menuDropClass,
          distanceBetweenMenuItemAndDrop,
          state.menuItemClass
        )
      },
      true
    )

    menuItem.addEventListener(
      'mouseleave',
      event => {
        if (!state.megaMenuActive) {
          return
        }

        removeBridgeBetweenDropAndMenu()
      },
      true
    )
  })
}
