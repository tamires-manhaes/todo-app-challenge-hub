import 'styled-components';

import { Theme } from './src/theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
