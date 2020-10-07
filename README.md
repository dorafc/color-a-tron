# color-a-tron
> A small library for generating random color palettes

![Gif of randomly generated color palettes as page reloads](https://github.com/dorafc/color-a-tron/blob/main/imgs/coloratron.gif?raw=true)

## Set up
coming soon

## Features
Color-a-tron is small library with a silly name that generates 5 colors palattes from a single HSL color. The library can also convert HSL colors to rgb hex values for use in front-end code.

## Usage
### Install
`npm i color-a-tron`

### Tests 
Color-a-tron uses Jest (and currently Chai as an assertion library). Tests are in index.test.js

`npm run test`

`npm test -- --coverage`

### Commiting
Color-a-tron uses pre-commit hooks in Husky and commit formatting scripts from Commitzen. Commit changes using the following script and format appropriately to ensure CI through github actions works appropriately

`npm run commit`

### Features
#### Color Class
`new Color(hue, saturation, lightness)`
Creates an HSL color object for editing

`ColorObj.getColorString()`
Returns a string formated as an HSL color "hsl(hue, sat, lightness)"

`ColorObj.getLighterColor(step)`
Returns a new Color object lightened by `step`

`ColorObj.getLighterColor(step)`
Returns a new Color object darkened by `step`

`ColorObj.getNewHue(step)`
Returns a new Color object with a hue shifted by `step`

`ColorObj.shiftColor(h,s,l)`
Returns a new Color object with its values shifted by the values in `h`, `s`, and `l`

`ColorObj.toHex()`
Returns a string with the HSL color converted to hex (eg. "#000000")

#### Functions
`generateMonochrome(color)`
creates a monocrome palette from a Color object. Returns an array of 5 Color objects

`generateAnalogous(color)`
creates a analogous palette from a Color object. Returns an array of 5 Color objects

`generateComplementary(color)`
creates a complementary palette from a Color object. Returns an array of 5 Color objects

`generateTriadic(color)`
creates a triadic palette from a Color object. Returns an array of 5 Color objects

`generateCompound(color)`
creates a compound palette from a Color object. Returns an array of 5 Color objects

`generateHexPalette()`
Returns a random 5 color palette as a hex string

## Background
I created this library to generate random color palettes for various personal projects. I also wanted a space to play around with using coding color relationships

## License
BSD 3-clause