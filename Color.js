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

export { Color };