import { activateMenu } from './activate-menu'
import { deactivateMenu } from './deactivate-menu'
import { AppState } from '../core/app.state.types'
import { getNumberFromClassName } from '../lib/get-number-from-class-name'
import { deactivateInit } from './deactivate-init'

export const attachMegaMenuEventListeners = (
  menuItems: NodeListOf<Element>,
  menuDrops: NodeListOf<Element>,
  state: AppState
): void => {
  menuItems.forEach((menuItem: HTMLElement) => {
    const menuItemClassName = menuItem.className
    const sequenceOfElement = getNumberFromClassName(menuItemClassName)
    console.log('TCL: sequenceOfElement', sequenceOfElement)

    menuItem.addEventListener(
      'mouseenter',
      () => {
        if (!state.megaMenuActive) {
          return
        }

        activateMenu(menuItem, state.menuDropClass)
      },
      true
    )

    menuItem.addEventListener(
      'mouseleave',
      originalEvent => {
        const originalElement = originalEvent.target as HTMLElement

        if (!state.megaMenuActive) {
          return
        }

        deactivateMenu(state.menuDropClass)
      },
      true
    )
  })
}
