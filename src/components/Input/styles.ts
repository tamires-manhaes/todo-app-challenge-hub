import { myTheme } from '../../theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  
  .input {
    width: calc(100% - 20px);
    z-index: 1;

    background: ${myTheme.colors.dark.veryDarkDesaturatedBlue};
    color: ${myTheme.colors.light.veryLightGray};
    border-radius: ${myTheme.borderRadius.md};
    font-size: 16px;
    padding: 20px;
  }

  > button {
    background: ${myTheme.colors.dark.veryDarkDesaturatedBlue};
    border: none;
    border-radius: ${myTheme.borderRadius.md};
    height: 100%;
    padding: 16px;
    transition: background ease-in-out 350ms;

    &:hover {
      background: ${myTheme.colors.dark.veryDarkGrayishBlueHover};
    }

    > img {
      width: 22px;
      height: 22px;
    }
  }
`;
