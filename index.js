const pickOrigColor = () => {
  return "hsl(0, 0%, 95%)"
}

// set original color
const origColor = pickOrigColor()

// update DOM
const displaySpace = document.getElementById('colors')

let origColorSpace = document.createElement('div')
origColorSpace.setAttribute('id', 'orig-color')
origColorSpace.setAttribute('class', 'col-square')
origColorSpace.style.backgroundColor = origColor
displaySpace.appendChild(origColorSpace)