export const toggleVisibilityOfNormalMenu = (
  selector: string,
  visibility: boolean = true
): void => {
  const normalMenus = document.querySelectorAll(`.${selector}`)

  if (!normalMenus) {
    return
  }

  const visibilityProperty = visibility ? 'visible' : 'hidden'

  normalMenus.forEach((el: HTMLElement) => {
    el.style.visibility = visibilityProperty
  })
}
