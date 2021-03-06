class Color{
  // create an HSL color
  constructor(hue, saturation, lightness){
    this.hue =  normalizeHue(hue);
    this.saturation = normalizeSaturation(saturation);
    this.lightness = normalizeLightness(lightness)
  }

  // return the HSL color as a string
  getColorString(){
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
  } 

  // return a new version of the color
  getLighterColor(step){
    const newLightness = (this.lightness+step <= 90) ? this.lightness+step : 90
    return new Color(this.hue, this.saturation, newLightness)
  }

  // return a new darker version of the color
  getDarkerColor(step){
    const newLightness = (this.lightness-step >= 10) ? this.lightness-step : 10
    return new Color(this.hue, this.saturation, newLightness)
  }

  // return a new color with a shifted hue value
  getNewHue(step){
    let newHue = normalizeHue(this.hue+step)
    
    return new Color(newHue, this.saturation, this.lightness)
  }

  // return a new color with shifted hue, saturation, and lightness values
  // TO DO add checks for modified colors
  shiftColor(h,s,l){
    return new Color(this.hue + h, this.saturation + s, this.lightness + l)
  }

  // return a string of the colors hex value
  toHex(){
    // from https://css-tricks.com/converting-color-spaces-in-javascript/ and https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
    let color = ""
    let red, green, blue

    const sat = this.saturation / 100
    const light = this.lightness / 100

    const chroma = (1 - Math.abs(2 * light - 1)) * sat
    const x = chroma * (1 - Math.abs((this.hue / 60) % 2 - 1))
    const match = light - (chroma / 2)

    // find values based on where the hue percentage lies
    if (0 <= this.hue && this.hue < 60){
      red = chroma
      green = x
      blue = 0
    } else
    if (60 <= this.hue && this.hue < 120){
      red = x
      green = chroma
      blue = 0
    } else
    if (120 <= this.hue && this.hue < 180){
      red = 0
      green = chroma
      blue = x
    } else
    if (180 <= this.hue && this.hue < 240){
      red = 0
      green = x
      blue = chroma
    } else
    if (240 <= this.hue && this.hue < 300){
      red = x
      green = 0
      blue = chroma
    } else
    if (300 <= this.hue && this.hue < 360){
      red = chroma
      green = 0
      blue = x
    }

    // convert to 255 scale, convert to hex
    red = Math.round((red + match) * 255).toString(16);
    green = Math.round((green + match) * 255).toString(16);
    blue = Math.round((blue + match) * 255).toString(16);

    red = (red.length == 1) ? `0${red}` : red
    green = (green.length == 1) ? `0${green}` : green
    blue = (blue.length == 1) ? `0${blue}` : blue

    color = `#${red}${green}${blue}`
    return color
  }
}

// hue is between 0 and 359
function normalizeHue(hue){
  let newHue = hue

  while (newHue < 0){
    newHue += 360
  }

  return newHue % 360
}

function normalizeSaturation(sat){
  let newSat = sat

  while (newSat < 0){
    newSat += 100
  }

  return newSat % 101
}

function normalizeLightness(light){
  let newLight = light

  while (newLight < 0){
    newLight += 100
  }

  return newLight % 101
}

export { Color, normalizeHue, normalizeSaturation };