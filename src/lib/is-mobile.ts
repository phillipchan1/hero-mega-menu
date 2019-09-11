/**
 * Determimines whether the user is currently in
 * mobile port.
 * @param mobileViewportWidth
 */
export const isMobile = (mobileViewportWidth: number) => {
  const windowWidth = window.innerWidth

  return windowWidth < mobileViewportWidth
}
