import { Theme } from "./types";

 const myTheme: Theme = {
  colors: {
    dark: {
      veryDarkBlue: '#161722',
      veryDarkDesaturatedBlue: '#25273c',
      lightGrayishBlue: '	#cacde8',
      lightGrayishBlueHover: '#e4e5f1',
      darkGrayishBlue: '#777a92',
      veryDarkGrayishBlue: '#4d5066',
      veryDarkGrayishBlueHover: '#393a4c'
    },
    light:{
      veryLightGray: '#fafafa',
      darkGrayishBlue: '#9394a5',
      lightGrayishBlue: '	#d2d3db',
      veryDarkGrayishBlue: '#484b6a',
      veryLightGrayishBlue: '#e4e5f1'
    }
  },
  fonts: {
    title: {
      fontSize: '48px',
      fontWeight: 900,
      letterSpacing: '0px'
    },
    subtitle: {
      fontSize: '32px',
      fontWeight: 500,
      letterSpacing: '0.15px'
    },
    body: {
      fontSize: '18px',
      fontWeight: 500,
      letterSpacing: '0.5px'
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      letterSpacing: '1.25px'
    },
    overline: {
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '1.5px'
    }
  },
  spacing: value => value * 8,
  borderRadius: {
    none: '0',
    sm: '2px',
    md: '5px',
    lg: '8px',
    pill: '12px',
    circular: '50%'
  },
  borderWidth: {
    none: '0',
    hairline: '0.5px',
    thin: '1px',
    thick: '2px',
    heavy: '4px'
  },
  padding: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '18px',
    xl: '24px'
  },
  shadows: [
    '0px 2px 6px rgba(0, 0, 0, 0.1)',
    '6px 6px 12px rgba(0, 0, 0, 0.08)',
    '0px 12px 18px rgba(0, 0, 0, 0.1)',
    '0px 10px 24px rgba(0, 0, 0, 0.1)'
  ],
 }


export { myTheme };  
export type { Theme };

