import { removeClassFromElements } from '../lib/remove-class-from-elements'
import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'

export const activateMenu = (
  elements: NodeListOf<Element>,
  el: HTMLElement,
  overrideMenuClass: string
): void => {
  removeClassFromElements(elements, 'active')

  toggleVisibilityOfNormalMenu(overrideMenuClass, false)

  el.classList.add('active')
}
