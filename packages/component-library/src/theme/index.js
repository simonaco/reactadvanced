// packages/component-library/src/theme/index.js
// http://chir.ag/projects/name-that-color/
const colors = {
    bostonBlue: "#428bca",
    stTropaz: "#2a6496",
    maroonFlush: "#c7254e",
    softPeach: "#f9f2f4",
    mantis: "#6ECE5A",
    citrineWhite: "#FBF7DC",
    blues: [
      '#004170',
      '#006fbe',
      '#2d8fd5',
      '#5aa7de',
    ]
  };
  
  const fontFamilies = {
    heading: "Artifika",
    body: "PT Serif, Helvetica, Arial, sans-serif",
    code: "Roboto Mono, monospace"
  };
  
  export default {
    textStyles: {
      artifika: {
        tag: "h1",
        fontSize: [12, 13, 14],
        fontWeight: 700,
        lineHeight: ["32px", "36px", "56px"],
        fontFamily: fontFamilies.heading,
        color: colors.blues[2]
      },
    },
    fontSizes: [12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 52],
    breakpoints: ["319px", "599px"],
    colors: {
      ...colors
    }
  };
  
  