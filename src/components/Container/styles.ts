import styled from 'styled-components';
import { myTheme as theme } from '../../theme/index';

export const Main = styled.main`
  position: relative;
  background-color: ${theme.colors.dark.veryDarkBlue};
  height: 100vh;

  > img {
    object-fit: cover;
    width: 100%;
    height: 35vh;
  }
`;

export const Div = styled.div`
  position: absolute;
  width: 50vw;
  min-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  margin: 0 auto;
  
`;

export const Content = styled.div``;
