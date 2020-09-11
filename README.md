# color-a-tron
> A small library for generating random color palettes

![Gif of randomly generated color palettes as page reloads](https://github.com/dorafc/color-a-tron/blob/main/imgs/coloratron.gif?raw=true)

## Set up
coming soon

## Features
Color-a-tron is small library with a silly name that generates 5 colors palattes from a single HSL color. The library can also convert HSL colors to rgb hex values for use in front-end code.

## Usage
### Tests 
Color-a-tron uses Jest (and currently Chai as an assertion library). Tests are in index.test.js
`npm run test`
`npm test -- --coverage`

### Commiting
Color-a-tron uses pre-commit hooks in Husky and commit formatting scripts from Commitzen. Commit changes using the following script and format appropriately to ensure CI through github actions works appropriately
`npm run commit`

## Background
I created this library to generate random color palettes for various personal projects. I also wanted a space to play around with using coding color relationships

## License
BSD 3-clause