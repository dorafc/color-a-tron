import { Color } from '../Color.js'

/* ---
 * pick a color
 * --- */
const pickOrigColor = () => {
  let color

  // pick hue (between 0 and 360), saturation (between 0 and 100), and lightness (between 30 and 70)
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 40) + 20
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
const monochromatic = [origColor.getDarkerColor(30), 
  origColor.getDarkerColor(15), 
  origColor, 
  origColor.getLighterColor(15),
  origColor.getLighterColor(30)]

const analogous = [origColor.getNewHue(-60).getLighterColor(20),
  origColor.getNewHue(-60),
  origColor,
  origColor.getNewHue(60),
  origColor.getNewHue(60).getDarkerColor(20)]

const comp = [origColor.getNewHue(180).getLighterColor(15),
  origColor.getNewHue(180),
  origColor,
  origColor.getDarkerColor(15),
  origColor.getDarkerColor(30)]

const tri = [origColor.getNewHue(-120).getLighterColor(15),
  origColor.getNewHue(-120),
  origColor,
  origColor.getNewHue(120),
  origColor.getNewHue(120).getDarkerColor(30)]

const compound = [origColor.getNewHue(-160).getLighterColor(15),
  origColor.getNewHue(-160),
  origColor,
  origColor.getNewHue(160),
  origColor.getNewHue(160).getDarkerColor(30)]

// update DOM
const displaySpace = document.getElementById('colors')
const monoSpace = document.getElementById('mono')
const analogousSpace = document.getElementById('analogous')
const compSpace = document.getElementById('comp')
const triSpace = document.getElementById('tri')
const compoundSpace = document.getElementById('compound')

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

// show compound palette
let compoundColorSpace = document.createElement('div')
compoundColorSpace.setAttribute('id', 'compound-palette')
compoundColorSpace.setAttribute('class', 'palette')

compound.forEach((color, i) => {
  compoundColorSpace.appendChild(addColorSquare(`compound${i}`, color))
})

compoundSpace.appendChild(compoundColorSpace)
