import pkg from 'chai';
const { expect } = pkg;

import { Color, generateMonochrome, generateAnalogous, generateComplementary, generateTriadic, generateCompound, generateHexPalette } from './index.js'

/* TEST COLOR OBJECT */

// silly test to make sure that tests work 
describe('test fun happy times', () => {
  it ('should work!', () => {
    expect(true).to.be.true;
  })
})

// test constructor
describe('create a Color object', () => {
  it('should create an object with HSL values', () => {
    const h = 0
    const s = 100
    const l = 50

    let col = new Color(h,s,l)
    expect(col.hue).to.equal(h)
    expect(col.saturation).to.equal(s)
    expect(col.lightness).to.equal(l)
  })
})

// color HSL string
describe('get the string of the HSL color', () => {
  it('should return an HSL string of the color object', () => {
    const h = 0
    const s = 100
    const l = 50

    let col = new Color(h,s,l)
    expect(col.getColorString()).to.equal(`hsl(${h}, ${s}%, ${l}%)`)
  })
})

// get a lighter color
describe('return a lighter version of color', () => {
  it('should return a new color object with a higher lightness value', () => {
    const h = 0
    const s = 100
    const l = 50
    let step = [15, 50]

    let col = new Color(h,s,l)
    let lighterCol15 = col.getLighterColor(step[0])
    let lighterCol50 = col.getLighterColor(step[1])

    expect(lighterCol15.hue).to.equal(h)
    expect(lighterCol15.saturation).to.equal(s)
    expect(lighterCol15.lightness).to.equal(l+step[0])

    // cap lightness value at 90
    expect(lighterCol50.hue).to.equal(h)
    expect(lighterCol50.saturation).to.equal(s)
    expect(lighterCol50.lightness).to.equal(90)
  })
})

// get a darker color
describe('return a darker version of color', () => {
  it('should return a new color object with a lower lightness value', () => {
    const h = 0
    const s = 100
    const l = 50
    let step = [15, 50]

    let col = new Color(h,s,l)
    let darkerCol15 = col.getDarkerColor(step[0])
    let darkerCol50 = col.getDarkerColor(step[1])

    expect(darkerCol15.hue).to.equal(h)
    expect(darkerCol15.saturation).to.equal(s)
    expect(darkerCol15.lightness).to.equal(l-step[0])

    // cap lightness value at 10
    expect(darkerCol50.hue).to.equal(h)
    expect(darkerCol50.saturation).to.equal(s)
    expect(darkerCol50.lightness).to.equal(10)
  })
})

// test get new hue
describe('return a new color with a new shifted hue from the current hue', () => {
  const h = 0
  const s = 100
  const l = 50
  let steps = [15, 375]

  let col = new Color(h,s,l)

  let newCols = steps.map(s => col.getNewHue(s))

  expect(newCols[0].hue).to.equal(15)
  expect(newCols[1].hue).to.equal(15)
})

// shift color
describe('create a new color related to the current color', () => {
  const h = 0
  const s = 100
  const l = 50
  let col = new Color(h,s,l)
  let newCol = col.shiftColor(1,-1,1)

  expect(newCol.hue).to.equal(1)
  expect(newCol.saturation).to.equal(99)
  expect(newCol.lightness).to.equal(51)
})

// to hex string
describe('convert the HSL value to a hex string', () => {
  const h = 0
  const s = 100
  const l = 50

  let col = new Color(h,s,l)

  expect(col.toHex()).to.equal("#ff0000")
})