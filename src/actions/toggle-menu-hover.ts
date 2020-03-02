const styleBlockClassId = 'mega-menu-styles'

const createStyleForMenuHover = (
  menuItemClass: string,
  menuDropClass: string
) => {
  return `
  <div id='${styleBlockClassId}'>
    <style>
      [class^=${menuItemClass}] {
          position: relative;
      }

      [class^=${menuItemClass}]:hover .${menuDropClass} {
          display: block !important;
          visibility: visible;
          opacity: 1
      }
    </style>
  </div>
  `
}

export const toggleMenuHover = (
  menuDropClass: string,
  menuItemClass: string,
  toggleState: boolean
) => {
  const head = document.querySelector('head')
  const styleBlock = document.querySelector(`#${styleBlockClassId}`)

  // activate
  if (toggleState === true) {
    // don't add it already exists
    if (!styleBlock) {
      const styleBlock = createStyleForMenuHover(menuItemClass, menuDropClass)
      head.innerHTML += styleBlock

      return
    }

    return
  }

  // deactivate
  if (!styleBlock) {
    return
  }

  document.querySelector(`#${styleBlockClassId}`).remove()
}
