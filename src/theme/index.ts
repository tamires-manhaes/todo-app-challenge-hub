import { Theme } from '@/theme/types';

const theme: Theme = {
  colors: {
    primary: '#6200EE',
    secondary: '#3700B3',
    accentColor: '#BB86FC',
    background: '#CECECE',
    common: {
      black: '#000',
      white: '#fff'
    }
  },
  fonts: {
    title: {
      fontSize: '60px',
      fontWeight: 300,
      letterSpacing: '-0.5px',
    },
    subtitle: {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.15px'
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      letterSpacing: '1.25px'
    },
    body: {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.5px'
    },
    overline: {
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '1.5px'
    }
  },
  padding: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  borderRadius: {
    none: '0px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '500px',
    circular: '50%'
  },
  borderWidth: {
    none: '0px',
    hairline: '1px',
    thin: '2px',
    thick: '4px',
    heavy: '8px'
  },
  spacing: value => value * 8,
  shadows: [
    '0px 2px 6px rgba(0, 0, 0, 0.1)',
    '6px 6px 12px rgba(0, 0, 0, 0.08)',
    '0px 12px 18px rgba(0, 0, 0, 0.1)',
    '0px 10px 24px rgba(0, 0, 0, 0.1)'
  ]
}

export { theme };
export type { Theme };

