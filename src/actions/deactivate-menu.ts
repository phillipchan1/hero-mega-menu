import { removeClassFromElements } from '../lib/remove-class-from-elements'

export const deactivateMenu = (menuDropClass: string) => {
  const megaMenus = document.querySelectorAll(`.${menuDropClass}`)

  removeClassFromElements(megaMenus, 'active')
}
