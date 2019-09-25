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
    distanceOfBottomOfMenuDropsToTopOfPage - distanceOfTopofMenuItemToTopOfPage

  console.log('adding styles')

  const styles = `<style>
    [class^=${menuItemClass}] {
        position: relative
    }

    [class^=${menuItemClass}]::after {
        content: '';
        height: ${distanceBetweenMenuItemAndDrop}px;
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
    }

    [class^=${menuItemClass}]:hover .${menuDropClass} {
        display: block !important;
        visibility: visible;
        opacity: 1
    }
  </style>
  `

  const head = document.querySelector('head')
  head.innerHTML += styles
}
