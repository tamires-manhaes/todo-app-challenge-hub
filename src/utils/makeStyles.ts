import type { SerializedStyles } from '@emotion/react';
import type { Theme } from '@/theme';
import useThemeContext from '@/contexts/Theme/useThemeContext';
import { useMemo } from 'react';
import clone from 'clone-deep';
export { css } from '@emotion/react';


export type UseStylesType <
  StyleProps,
  StyleKey extends string,
  StyleType = SerializedStyles
> = (styleProps?: StyleProps ) => Record<StyleKey, StyleType>;

export interface StyleCreator<StyleProps, StyleType = SerializedStyles> {
  (theme: Theme, styleProps: StyleProps): StyleType;
}

export function makeStyles<
  StylesProps extends Record<string, unknown> = Record<string, unknown>,
  StyleKey extends string = string,
  StyleType = SerializedStyles
>(
  styles: Record<StyleKey, StyleType | StyleCreator<StylesProps, StyleType>>,
): UseStylesType<StylesProps, StyleKey, StyleType>{
  const useStyles = (stylesProps?: StylesProps) => {
    const theme = useThemeContext();

    const currStyles = useMemo<Record<StyleKey, StyleType>>(() => {
      const StylesClone = clone(styles)
      const ProcessedStyles = {} as Record<StyleKey, StyleType>

      for(const [key, styleOrCreator] of Object.entries(StylesClone)){
        Object.assign(ProcessedStyles, {
          [key]: 
            typeof styleOrCreator === 'function'
              ? styleOrCreator(theme, stylesProps)
              : styleOrCreator
        })
      }

      return ProcessedStyles
    }, [stylesProps, theme])
    
    return currStyles
  }

  return useStyles
}
