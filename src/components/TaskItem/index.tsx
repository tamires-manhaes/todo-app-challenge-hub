import { FunctionComponent, useContext } from "react";
import * as S from './styles';
import x from '../../assets/icon-cross.svg';
import check from '../../assets/icon-check.svg';

import { 
  markTodoAsDone, 
  deleteTodo 
} from "../../services";
import { ToDoContext } from "../../contexts/ToDo";

interface ItemProps {
  id: string,
  task: string,
  isDone: boolean
}

const TaskItem: FunctionComponent<ItemProps> = ({id, isDone, task}) => {
  const { getAllToDos } = useContext(ToDoContext);

  const handleCheck = async (id: string) => {
    await markTodoAsDone(id);
    await getAllToDos();
  }

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    await getAllToDos();
  }

  return (
    <S.Item>
      <S.CheckButton 
        className={isDone ? `done` : `notDone`} 
        onClick={() => handleCheck(id)}
      >
        <img src={check} alt="checked icon" />
      </S.CheckButton>
      <span>{task}</span>
      <button className="x-button" onClick={() => handleDelete(id)}><img src={x} alt="x icon"/></button>
    </S.Item>
  )
}

export default TaskItem;
