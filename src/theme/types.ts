interface IFontProps {
  fontWeight: number,
  fontSize: string,
  letterSpacing: string
}

interface IGlobalSizes {
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string
}

interface IRadius {
  none: string,
  sm: string, 
  md: string, 
  lg: string,
  pill: string,
  circular: string
}

interface IBorderWidth {
  none: string,
  hairline: string,
  thin: string,
  thick: string,
  heavy: string
}

interface SpacingGetter { (value: number): number }

interface MyTheme {
  colors: {
    primary: string,
    secondary: string,
    background: string,
    accentColor: string,
    common: {
      black: string,
      white: string
    }
  },
  fonts: {
    title: IFontProps,
    subtitle: IFontProps,
    body: IFontProps,
    button: IFontProps,
    overline: IFontProps
  },
  padding: IGlobalSizes,
  borderWidth: IBorderWidth,
  borderRadius: IRadius,
  shadows: string[],
  spacing: SpacingGetter
}

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}

export type { MyTheme as Theme }
