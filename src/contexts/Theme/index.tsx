import { FunctionComponent, ReactNode, useMemo } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider, useTheme } from 'styled-components';

import { myTheme as defaultTheme, Theme } from '../../theme';
import { isObjEmpty } from '../../utils/objIsEmpty';

interface OwnProps {
  theme: Theme,
  children: ReactNode
}

export const ThemeProvider: FunctionComponent<OwnProps> = ({ children, theme }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
}

export const useThemeContext = (): Theme | DefaultTheme => {
  const contextTheme = useTheme();

  const theme = useMemo(
    () => (!isObjEmpty(contextTheme) ? contextTheme : defaultTheme), [contextTheme] 
  )

  return theme
}
