import colors from './colors'
import fontFamilies from './font-families'
import breakpoints from './breakpoints'

export default {
  textStyles: {
    artifika: {
      tag: 'h1',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: ['32px', '36px', '56px'],
      fontFamily: fontFamilies.heading,
      color: colors.blues[2],
    },
  },
  fontSizes: [12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 52],
  breakpoints: Object.values(breakpoints),
  colors: {
    ...colors,
  },
}
