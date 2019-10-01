export const getVerticalDistanceBetweenTwoElements = (
  el1: Element,
  el2: Element
) => {
  const el1ClientReact: ClientRect = el1.getBoundingClientRect()
  const el2ClientReact: ClientRect = el2.getBoundingClientRect()

  const distanceOfBottomOfElemOneToTopOfPage =
    el1ClientReact.top + el1ClientReact.height

  const distanceOfTopofMenuItemToTopOfPage = el2ClientReact.top

  return (
    distanceOfBottomOfElemOneToTopOfPage - distanceOfTopofMenuItemToTopOfPage
  )
}
