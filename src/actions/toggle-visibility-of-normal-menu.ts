export const toggleVisibilityOfNormalMenu = (
  selector: string,
  visibility: boolean = true
): void => {
  const normalMenus = document.querySelectorAll(`.${selector}`)

  if (!normalMenus) {
    return
  }

  const displayProperty = visibility ? '' : 'none'

  normalMenus.forEach((el: HTMLElement) => {
    el.style.display = displayProperty
  })
}
