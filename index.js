class Color{
  constructor(hue, saturation, lightness){
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness
  }

  getColorString(){
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
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

// update DOM
const displaySpace = document.getElementById('colors')

let origColorSpace = document.createElement('div')
origColorSpace.setAttribute('id', 'orig-color')
origColorSpace.setAttribute('class', 'col-square')
origColorSpace.style.backgroundColor = origColor.getColorString()
displaySpace.appendChild(origColorSpace)