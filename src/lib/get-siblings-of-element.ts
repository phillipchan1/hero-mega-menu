export const getSiblings = (el: HTMLElement) => {
  var siblings = []
  var sibling = el.parentNode.firstChild

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== el) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }

  return siblings
}
