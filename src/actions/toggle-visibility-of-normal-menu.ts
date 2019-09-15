export const toggleVisibilityOfNormalMenu = (
  selector: string,
  visibility: boolean = true
): void => {
  if (!selector) {
    return
  }

  const normalMenus = document.querySelectorAll('selector')
  const visibilityProperty = visibility ? 'visible' : 'hidden'

  normalMenus.forEach((el: HTMLElement) => {
    el.style.visibility = visibilityProperty
  })
}
