import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'

export const init = (menuItemClass: string, overrideMenuClass: string) => {
  const respectiveOverrideMenu = document.querySelectorAll(
    `[class^=${menuItemClass}] .${overrideMenuClass}`
  )

  respectiveOverrideMenu.forEach((overrideMenu: HTMLElement) => {
    overrideMenu.style.display = 'none'
  })

  toggleVisibilityOfNormalMenu(overrideMenuClass, false)
}
