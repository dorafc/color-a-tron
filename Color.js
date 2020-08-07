class Color{
  constructor(hue, saturation, lightness){
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness
  }

  getColorString(){
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
  } 

  getLighterColor(step){
    const newLightness = (this.lightness+step <= 90) ? this.lightness+step : 90
    return new Color(this.hue, this.saturation, newLightness)
  }

  getDarkerColor(step){
    const newLightness = (this.lightness-step >= 10) ? this.lightness-step : 10
    return new Color(this.hue, this.saturation, newLightness)
  }

  getNewHue(step){
    const newHue = this.hue+step % 360
    return new Color(newHue, this.saturation, this.lightness)
  }
}

export { Color };