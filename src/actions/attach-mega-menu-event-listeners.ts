import { activateMenu } from './activate-menu'
import { removeClassFromElements } from '../lib/removeClassFromElements'
import { AppState } from '../core/app.state.types'

export const attachMegaMenuEventListeners = (
  elements: NodeListOf<Element>,
  state: AppState
): void => {
  elements.forEach((el: HTMLElement) => {
    el.addEventListener(
      'mouseenter',
      () => {
        if (!state.megaMenuActive) {
          return
        }

        removeClassFromElements(elements, 'active')
        activateMenu(el)
      },
      true
    )

    el.addEventListener(
      'mouseleave',
      () => {
        if (!state.megaMenuActive) {
          return
        }

        removeClassFromElements(elements, 'active')
      },
      true
    )
  })
}
