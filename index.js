class Color{
  constructor(hue, saturation, lightness){
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness

    this.step = 15;
  }

  getColorString(){
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
  } 

  getLighterColor(){
    const newLightness = (this.lightness+this.step <= 99) ? this.lightness+this.step : 99
    return new Color(this.hue, this.saturation, newLightness)
  }

  getDarkerColor(){
    const newLightness = (this.lightness-this.step >= 1) ? this.lightness-this.step : 1
    return new Color(this.hue, this.saturation, newLightness)
  }
}

const pickOrigColor = () => {
  let color

  // pick hue (between 0 and 360), saturation (between 0 and 100), and lightness (between 30 and 70)
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 100)
  const lightness = Math.floor(Math.random() * 50) + 30

  color = new Color(hue, saturation, lightness)
  return color
}

// set original color
const origColor = pickOrigColor()
const monochromatic = [origColor.getDarkerColor().getDarkerColor(), 
  origColor.getDarkerColor(), 
  origColor, 
  origColor.getLighterColor(),
  origColor.getLighterColor().getLighterColor()]

console.log(monochromatic)

// update DOM
const displaySpace = document.getElementById('colors')
const monoSpace = document.getElementById('mono')

// show original color
let origColorSpace = document.createElement('div')
origColorSpace.setAttribute('id', 'orig-color')
origColorSpace.setAttribute('class', 'col-square')
origColorSpace.style.backgroundColor = origColor.getColorString()
displaySpace.appendChild(origColorSpace)

// show monochromatic palette
let monoColorSpace = document.createElement('ul')
monoColorSpace.setAttribute('id', 'mono-palette')
monoColorSpace.setAttribute('class', 'palette')

monochromatic.forEach((color, i) => {
  let colSpace = document.createElement('li')
  colSpace.setAttribute('class', 'col-square')
  colSpace.style.backgroundColor = color.getColorString()
  monoColorSpace.appendChild(colSpace)
})

monoSpace.appendChild(monoColorSpace)
