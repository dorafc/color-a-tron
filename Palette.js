import { Color } from '../Color.js'

const generateMonochrome = (color) => {
  return [color.getLighterColor(30), 
    color.getLighterColor(15), 
    color, 
    color.getDarkerColor(15),
    color.getDarkerColor(30)]
}

const generateAnalogous = (color) => {
  return [color.getNewHue(-60).getLighterColor(20),
    color.getNewHue(-60),
    color,
    color.getNewHue(60),
    color.getNewHue(60).getDarkerColor(20)]
}

const generateComplementary = (color) => {
  return [color.getNewHue(180).getLighterColor(15),
    color.getNewHue(180),
    color,
    color.getDarkerColor(15),
    color.getDarkerColor(30)]
}

const generateTriadic = (color) => {
  return [color.getNewHue(-120).getLighterColor(15),
    color.getNewHue(-120),
    color,
    color.getNewHue(120),
    color.getNewHue(120).getDarkerColor(30)]
}

const generateCompound = (color) => {
  return [color.getNewHue(-160).getLighterColor(15),
    color.getNewHue(-160),
    color,
    color.getNewHue(160),
    color.getNewHue(160).getDarkerColor(30)]
}

export { generateMonochrome, generateAnalogous, generateComplementary, generateTriadic, generateCompound }