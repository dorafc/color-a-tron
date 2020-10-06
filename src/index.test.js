
import { Color, normalizeHue, normalizeSaturation, generateMonochrome, generateAnalogous, generateComplementary, generateTriadic, generateCompound, generateHexPalette } from '../index.js'
// import { expect } from 'chai'

/* TEST COLOR OBJECT */

// test constructor
describe('create a Color object', () => {
  it('should create an object with HSL values', () => {
    const h = 0
    const s = [100, -10]
    const l = [50, -120]

    let col = new Color(h,s[0],l[0])
    let col2 = new Color(h,s[1],l[1])
    expect(col.hue).toBe(h)
    expect(col.saturation).toBe(s[0])
    expect(col.lightness).toBe(l[0])

    expect(col2.hue).toBe(h)
    expect(col2.saturation).toBe(s[1] + 100)
    expect(col2.lightness).toBe(l[1] + 200)
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
      expect(col.hue).toBeGreaterThan(-1)
      expect(col.hue).toBeLessThan(360)
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
    expect(col.getColorString()).toBe(`hsl(${h}, ${s}%, ${l}%)`)
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

    expect(lighterCol15.hue).toBe(h)
    expect(lighterCol15.saturation).toBe(s)
    expect(lighterCol15.lightness).toBe(l+step[0])

    // cap lightness value at 90
    expect(lighterCol50.hue).toBe(h)
    expect(lighterCol50.saturation).toBe(s)
    expect(lighterCol50.lightness).toBe(90)
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

    expect(darkerCol15.hue).toBe(h)
    expect(darkerCol15.saturation).toBe(s)
    expect(darkerCol15.lightness).toBe(l-step[0])

    // cap lightness value at 10
    expect(darkerCol50.hue).toBe(h)
    expect(darkerCol50.saturation).toBe(s)
    expect(darkerCol50.lightness).toBe(10)
  })
})

// test get new hue
describe('return a new color with a new shifted hue from the current hue', () => {
  it('should return a new color object with a higher lightness value', () => {
    const h = 1
    const s = 100
    const l = 50
    let steps = [15, 376]

    let col = new Color(h,s,l)

    let newCols = steps.map(s => col.getNewHue(s))

    expect(newCols[0].hue).toBe(16)
    expect(newCols[1].hue).toBe(17)
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

    expect(newCol.hue).toBe(1)
    expect(newCol.saturation).toBe(99)
    expect(newCol.lightness).toBe(51)
  })
})

// to hex string
describe('convert the HSL value to a hex string', () => {
  it('should return a string showing the correct hex value of the HSL color', () => {
    const h = [0, 70, 140, 190, 280, 310]
    const s = 100
    const l = 50

    let col = new Color(h[0],s,l)
    let col2 = new Color(h[1],s,l)
    let col3 = new Color(h[2],s,l)
    let col4 = new Color(h[3],s,l)
    let col5 = new Color(h[4],s,l)
    let col6 = new Color(h[5],s,l)

    expect(col.toHex()).toBe("#ff0000")
    expect(col2.toHex()).toBe("#d4ff00")
    expect(col3.toHex()).toBe("#00ff55")
    expect(col4.toHex()).toBe("#00d5ff")
    expect(col5.toHex()).toBe("#aa00ff")
    expect(col6.toHex()).toBe("#ff00d4")
  })
})

/* TEST PALETTE */

// test palette generation
describe('create a hex palette', () => {
  it('should return an array with 5 hex value strings', () => {

    let pal = generateHexPalette()
    expect(pal.length).toBe(5)

    pal.forEach(col => {
      expect(col).toHaveLength(7)
      expect(col.slice(0,1)).toBe('#')
      expect(typeof col).toBe('string');
    })
  })
})

// test monochrome palette
describe('create a monochrome palette', () => {
  it ('should return an array with 5 colors with different lightness values', () => {
    const hue = Math.floor(Math.random() * 360)
    const sat = 100
    const light = 50
    const color = new Color(hue, sat, light)

    const pal = generateMonochrome(color)
    expect(pal.length).toBe(5)
    expect(pal[0].lightness).toBeGreaterThan(light)
    expect(pal[1].lightness).toBeGreaterThan(light)
    expect(pal[2].lightness).toBe(light)
    expect(pal[3].lightness).toBeLessThan(light)
    expect(pal[4].lightness).toBeLessThan(light)

    pal.forEach(col => {
      expect(col.hue).toBe(hue)
      expect(col.saturation).toBe(sat)
    })
  })
})

// test analogus palette
describe('create an analogus palette', () => {
  it ('should return an array with 5 colors with three different hue values', () => {
    // const hue = Math.floor(Math.random() * 360)
    const hue = 120
    const sat = 100
    const light = 50
    const color = new Color(hue, sat, light)

    const pal = generateAnalogous(color)

    expect(pal.length).toBe(5)

    pal.forEach(col => {
      expect([normalizeHue(hue + 60), normalizeHue(hue - 60), hue]).toContain(col.hue)
    })
  })
})

// test complementary palette
describe('create a complementary palette', () => {
  it ('should return an array with 5 colors with different hue values', () => {
    const hue = Math.floor(Math.random() * 360)
    const sat = 100
    const light = 50
    const color = new Color(hue, sat, light)

    const pal = generateComplementary(color)

    pal.forEach(col => {
      expect([normalizeHue(hue + 180), hue]).toContain(col.hue)
    })
  })
})

// test complementary palette
describe('create a triadic palette', () => {
  it ('should return an array with 5 colors with different hue values', () => {
    const hue = Math.floor(Math.random() * 360)
    const sat = 100
    const light = 50
    const color = new Color(hue, sat, light)

    const pal = generateTriadic(color)

    pal.forEach(col => {
      expect([normalizeHue(hue + 120), normalizeHue(hue - 120), hue]).toContain(col.hue)
    })
  })
})

describe('create a compound palette', () => {
  it ('should return an array with 5 colors with different hue values', () => {
    const hue = Math.floor(Math.random() * 360)
    const sat = 100
    const light = 50
    const color = new Color(hue, sat, light)

    const pal = generateCompound(color)

    pal.forEach(col => {
      expect([normalizeHue(hue + 160), normalizeHue(hue - 160), hue]).toContain(col.hue)
    })
  })
})