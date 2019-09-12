import { makeElementActive } from '../lib/makeElementActive'
import { removeClassFromElements } from '../lib/removeClassFromElements'

export const activateMenu = (el: HTMLElement): void => {
  makeElementActive(el)
}
