import { 
  ChangeEventHandler, 
  FunctionComponent, 
  MouseEventHandler 
} from "react";
import * as S from './styles';
import buttonIcon from '../../assets/icon-check.svg';

interface InputProps {
  value: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
  onChange: ChangeEventHandler<HTMLInputElement>,
  type: string
}

const Input: FunctionComponent<InputProps> = ({
  type, 
  value, 
  onClick, 
  onChange
 }) => {
  return (
    <S.Container>
      <input className="input" type={type}  value={value} onChange={onChange}/>
      <button onClick={onClick}><img src={buttonIcon} /></button>
    </S.Container>  
  )
}

export default Input;
