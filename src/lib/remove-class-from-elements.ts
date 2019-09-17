export const removeClassFromElements = (
  elements: NodeListOf<Element>,
  className: string
) => {
  elements.forEach(el => {
    el.classList.remove(className)
  })
}
