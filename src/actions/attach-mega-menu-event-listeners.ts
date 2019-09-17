import { activateMenu } from './activate-menu'
import { removeClassFromElements } from '../lib/remove-class-from-elements'
import { AppState } from '../core/app.state.types'
import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'

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

        activateMenu(elements, el, state.overrideMenuClass)
      },
      true
    )

    el.addEventListener(
      'mouseleave',
      () => {
        if (!state.megaMenuActive) {
          return
        }
        toggleVisibilityOfNormalMenu(state.overrideMenuClass, true)
        removeClassFromElements(elements, 'active')
      },
      true
    )
  })
}
