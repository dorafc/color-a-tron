import pkg from 'chai';
const { expect } = pkg;

import { Color, generateMonochrome, generateAnalogous, generateComplementary, generateTriadic, generateCompound, generateHexPalette } from './index.js'

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
    expect(col.hue).to.equal(0)
    expect(col.saturation).to.equal(100)
    expect(col.lightness).to.equal(50)
  })
})