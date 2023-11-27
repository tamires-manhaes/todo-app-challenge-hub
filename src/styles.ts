import styled from 'styled-components';
import { myTheme } from './theme';

export const Content = styled.div`
  background: ${myTheme.colors.dark.veryDarkDesaturatedBlue};
  margin: ${myTheme.padding.lg} 0;
  
`;

export const List = styled.ul`
  
`;

export const Footer = styled.div`
  
  padding: ${myTheme.padding.sm} ${myTheme.padding.md};
  margin: ${myTheme.padding.sm} 0;

  > span {
    display: inline-flex;
  }
`;
