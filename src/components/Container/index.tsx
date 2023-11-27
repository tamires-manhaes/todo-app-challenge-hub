import { FunctionComponent, ReactNode } from "react";
import * as S from './styles';
import bgImg from '../../assets/bg-desktop-dark.jpg';

interface ChildrenProps {
  children: ReactNode
}

const Container: FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <S.Main>
      <img src={bgImg} alt="bg" />
      <S.Div>
        {children}
      </S.Div>
    </S.Main>
  )
}

export default Container
