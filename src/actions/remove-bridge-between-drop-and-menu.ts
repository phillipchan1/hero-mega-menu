export const removeBridgeBetweenDropAndMenu = (): void => {
  const bridgeStylesContainers = document.querySelectorAll('.mega-menu-styles')

  if (!bridgeStylesContainers) {
    return
  }

  bridgeStylesContainers.forEach(bridgeStyles => {
    bridgeStyles.parentNode.removeChild(bridgeStyles)
  })
}
