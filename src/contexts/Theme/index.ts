import { Theme } from "./types";

 const theme: Theme = {
  colors: {
    primary: '#6200EE',
    secondary: '#3700B3',
    background: '#cecece',
    accentColor: '#BB86FC',
  },
  fonts: {
    title: {
      fontSize: '48px',
      fontWeight: 900,
      lineHeight: '4px',
      margin: '4px',
      letterSpacing: '0px'
    },
    subtitle: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '4px',
      margin: '4px',
      letterSpacing: '0.15px'
    },
    body: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '4px',
      margin: '4px',
      letterSpacing: '0.5px'
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '4px',
      margin: '4px',
      letterSpacing: '1.25px'
    },
    overline: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: '4px',
      margin: '4px',
      letterSpacing: '1.5px'
    }
  },
  border: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
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
  spacing: value => value * 8
 }

export { theme };  
export type { Theme };

