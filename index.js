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

const analogous = [origColor.getNewHue(-60).getLighterColor(),
  origColor.getNewHue(-60),
  origColor,
  origColor.getNewHue(60),
  origColor.getNewHue(60).getDarkerColor()]

const comp = [origColor.getNewHue(180).getLighterColor(),
  origColor.getNewHue(180),
  origColor,
  origColor.getDarkerColor(),
  origColor.getDarkerColor().getDarkerColor()]

const tri = [origColor.getNewHue(-120).getLighterColor(),
  origColor.getNewHue(-120),
  origColor,
  origColor.getNewHue(120),
  origColor.getNewHue(120).getDarkerColor()]

// update DOM
const displaySpace = document.getElementById('colors')
const monoSpace = document.getElementById('mono')
const analogousSpace = document.getElementById('analogous')
const compSpace = document.getElementById('comp')
const triSpace = document.getElementById('tri')

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

// show analogous palette
let analogousColorSpace = document.createElement('div')
analogousColorSpace.setAttribute('id', 'ana-palette')
analogousColorSpace.setAttribute('class', 'palette')

analogous.forEach((color, i) => {
  analogousColorSpace.appendChild(addColorSquare(`analogous${i}`, color))
})

analogousSpace.appendChild(analogousColorSpace)

// show complementary palette
let compColorSpace = document.createElement('div')
compColorSpace.setAttribute('id', 'comp-palette')
compColorSpace.setAttribute('class', 'palette')

comp.forEach((color, i) => {
  compColorSpace.appendChild(addColorSquare(`comp${i}`, color))
})

compSpace.appendChild(compColorSpace)

// show triadic palette
let triColorSpace = document.createElement('div')
triColorSpace.setAttribute('id', 'tri-palette')
triColorSpace.setAttribute('class', 'palette')

tri.forEach((color, i) => {
  triColorSpace.appendChild(addColorSquare(`tri${i}`, color))
})

triSpace.appendChild(triColorSpace)
