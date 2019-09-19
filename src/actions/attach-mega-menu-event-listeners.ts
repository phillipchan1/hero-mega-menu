import { activateMenu } from './activate-menu'
import { deactivateMenu } from './deactivate-menu'
import { AppState } from '../core/app.state.types'

export const attachMegaMenuEventListeners = (
  elements: NodeListOf<Element>,
  state: AppState
): void => {
  elements.forEach((menuDrop: HTMLElement) => {
    menuDrop.addEventListener(
      'mouseenter',
      () => {
        if (!state.megaMenuActive) {
          return
        }

        activateMenu(menuDrop, state.overrideMenuClass, state.menuDropClass)
      },
      true
    )

    menuDrop.addEventListener(
      'mouseleave',
      () => {
        if (!state.megaMenuActive) {
          return
        }

        deactivateMenu(state.overrideMenuClass, state.menuDropClass)
      },
      true
    )
  })
}
