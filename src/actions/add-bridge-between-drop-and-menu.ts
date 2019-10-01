import { getVerticalDistanceBetweenTwoElements } from '../lib/get-vertical-distance-between-two-elements'

export const addBridgeBetweenDropAndMenu = (
  menuDropClass: string,
  distanceBetweenMenuItemAndDrop: number,
  menuItemClass: string
) => {
  const menuDrops = document.querySelectorAll(`.${menuDropClass}`)

  const stylesDiv = document.createElement('div')
  stylesDiv.className = 'mega-menu-styles'

  const bridgeStyles = `
    <style>
        [class^=${menuItemClass}]::after {
        content: '';
        height: ${distanceBetweenMenuItemAndDrop}px;
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
    }
    </style>
  `

  stylesDiv.innerHTML = bridgeStyles

  const body = document.querySelector('body')
  body.appendChild(stylesDiv)
}
