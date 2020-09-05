import pkg from 'chai';
const { expect } = pkg;

import { Color, normalizeHue, generateMonochrome, generateAnalogous, generateComplementary, generateTriadic, generateCompound, generateHexPalette } from './index.js'

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

// test hue normalization
describe('hue should be between 0 and 360', () => {
  it('should be between 0 and 360', () => {
    const h = [0, 361, 700000, -20, -2398]
    const s = 100
    const l = 50

    let cols = []
    h.forEach(hue =>{
      cols.push(new Color(hue, s, l))
    })

    cols.forEach(col => {
      expect(col.hue).to.be.above(-1)
      expect(col.hue).to.be.below(360)
    })
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
  it('should return a new color object with a higher lightness value', () => {
    const h = 0
    const s = 100
    const l = 50
    let steps = [15, 375]

    let col = new Color(h,s,l)

    let newCols = steps.map(s => col.getNewHue(s))  
  })
})

// shift color
describe('create a new color related to the current color', () => {
  it('should return a new color object with adjusted values for hue, saturation, and lightness', () => {
    const h = 0
    const s = 100
    const l = 50
    let col = new Color(h,s,l)
    let newCol = col.shiftColor(1,-1,1)

    expect(newCol.hue).to.equal(1)
    expect(newCol.saturation).to.equal(99)
    expect(newCol.lightness).to.equal(51)
  })
})

// to hex string
describe('convert the HSL value to a hex string', () => {
  it('should return a string showing the correct hex value of the HSL color', () => {
    const h = 0
    const s = 100
    const l = 50

    let col = new Color(h,s,l)

    expect(col.toHex()).to.equal("#ff0000")
  })
})

// test palette generation
describe('create a hex palette', () => {
  it('should return an array with 5 hex value strings', () => {

    let pal = generateHexPalette()
    expect(pal.length).to.equal(5)

    pal.forEach(col => {
      expect(col).to.have.lengthOf(7)
      expect(col.slice(0,1)).to.equal('#')
      expect(col).to.be.a('string');
    })
  })
})