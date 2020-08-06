import { Color } from '../Color.js'

/* ---
 * pick a color
 * --- */
const pickOrigColor = () => {
  let color

  // pick hue (between 0 and 360), saturation (between 0 and 100), and lightness (between 30 and 70)
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 100)
  const lightness = Math.floor(Math.random() * 50) + 30

  color = new Color(hue, saturation, lightness)
  return color
}

/* ---
 * Add a color square
 * --- */
const addColorSquare = (id, color) => {
  let colSpace = document.createElement('div')
  colSpace.setAttribute('id', id)
  colSpace.setAttribute('class', 'col-square')
  colSpace.style.backgroundColor = color.getColorString()
  return colSpace
}


/* ---
 * Display time!
 * --- */

// set original color
const origColor = pickOrigColor()
const monochromatic = [origColor.getDarkerColor().getDarkerColor(), 
  origColor.getDarkerColor(), 
  origColor, 
  origColor.getLighterColor(),
  origColor.getLighterColor().getLighterColor()]

// update DOM
const displaySpace = document.getElementById('colors')
const monoSpace = document.getElementById('mono')

// show original color
let origColorSpace = document.createElement('div')
displaySpace.appendChild(addColorSquare(`orig-color`, origColor))

// show monochromatic palette
let monoColorSpace = document.createElement('div')
monoColorSpace.setAttribute('id', 'mono-palette')
monoColorSpace.setAttribute('class', 'palette')

monochromatic.forEach((color, i) => {
  monoColorSpace.appendChild(addColorSquare(`mono${i}`, color))
})

monoSpace.appendChild(monoColorSpace)
