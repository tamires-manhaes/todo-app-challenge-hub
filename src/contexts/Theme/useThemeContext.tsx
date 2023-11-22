import { useMemo } from "react";
import { useTheme } from '@emotion/react'
import { isObjEmpty } from "@/utils/objIsEmpty";
import { theme as defaultTheme, Theme } from '.';

const useThemeContext = (): Theme => {
  const contextTheme = useTheme();

  const theme = useMemo(
    () => (!isObjEmpty(contextTheme) ? contextTheme : defaultTheme), [contextTheme] 
  )

  return theme
}


export default useThemeContext
