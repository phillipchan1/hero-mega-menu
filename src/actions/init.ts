import { toggleVisibilityOfNormalMenu } from './toggle-visibility-of-normal-menu'

export const init = (overrideMenuClass: string) => {
  toggleVisibilityOfNormalMenu(overrideMenuClass, false)
}
