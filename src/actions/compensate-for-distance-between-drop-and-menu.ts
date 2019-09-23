export const compensateForDistanceBetweenDropAndMenu = (
  menuDropClass: string,
  menuItems: NodeListOf<Element>,
  menuItemClass: string
) => {
  const menuDrops = document.querySelectorAll(`.${menuDropClass}`)

  const menuDropClientReact: ClientRect = menuDrops[0].getBoundingClientRect()
  const menuItemClientRect: ClientRect = menuItems[0].getBoundingClientRect()

  const distanceOfBottomOfMenuDropsToTopOfPage =
    menuItemClientRect.top + menuItemClientRect.height

  const distanceOfTopofMenuItemToTopOfPage = menuDropClientReact.top

  const distanceBetweenMenuItemAndDrop =
    distanceOfTopofMenuItemToTopOfPage - distanceOfBottomOfMenuDropsToTopOfPage

  // only if there's a gap proceed
  // if (distanceBetweenMenuItemAndDrop <= 0) {
  //   return
  // }

  console.log('adding styles')

  const styles = `<style>
    [class^=${menuItemClass}] {
        position: relative
    }

    [class^=${menuItemClass}]::after {
        left: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 50px;
    }
  </style>
  `

  const head = document.querySelector('head')
  head.innerHTML += styles
}
