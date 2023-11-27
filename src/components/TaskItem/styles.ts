import { myTheme } from '../../theme';
import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  border-bottom: ${myTheme.borderWidth.hairline} solid rgba(255,255,255,0.2);
  background: ${myTheme.colors.dark.veryDarkDesaturatedBlue};
  padding: ${myTheme.padding.md};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    
  }

  > span {
    font-size: ${myTheme.fonts.body.fontSize};
    margin-right: auto;
    margin-left: ${myTheme.spacing(2)}px;
  }

  .x-button {
    /* margin-left: auto;
    position: absolute;
    right: 0;
    top: 0; */
  }
`

export const CheckButton = styled.button`
  background: transparent;
  border-radius: ${myTheme.borderRadius.circular};
  border: ${myTheme.borderWidth.hairline} solid rgba(255,255,255,0.2);
  width: 32px;
  height: 32px;
  border: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background ease-in-out 350ms;

  > img {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: linear-gradient(90deg, rgba(0,243,255,0.5) 0%, rgba(147,14,255,0.5) 50%, rgba(252,69,237,0.5) 100%);
  }
`;
