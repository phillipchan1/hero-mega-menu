import { makeElementActive } from '../lib/makeElementActive'
import { removeClassFromElements } from '../lib/removeClassFromElements'

export const attachMegaMenuEventListeners = (elements: NodeListOf<Element>) => {
  elements.forEach((el: HTMLElement) => {
    el.addEventListener('mouseenter', event => {
      removeClassFromElements(elements, 'active')
      makeElementActive(el)
    })

    el.addEventListener('mouseleave', () => {
      removeClassFromElements(elements, 'active')
    })
  })
}
