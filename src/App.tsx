import { FunctionComponent, MouseEvent, useContext, useEffect, useState } from 'react'
import { ToDoContext } from './contexts/ToDo';
import * as S from './styles';
import { createTodo } from './services';
import Container from './components/Container';
import Input from './components/Input';
import TaskItem from './components/TaskItem';

const App: FunctionComponent = () => {
  const [value, setValue] = useState<string>('');
  const { todoCounter, getAllToDos, todos } = useContext(ToDoContext);

  const handleClick = async (e: MouseEvent) => {
    e.preventDefault();
    await createTodo(value);
    await getAllToDos();
    setValue('');
  }

  useEffect(() => {
    (async () => {
      await getAllToDos();
    })()
  }, [])

  return (
    <Container>
      <h1>T O D O</h1>
      <Input 
        value={value}
        type='text'
        onChange={e => setValue(e.target.value)}
        onClick={handleClick}
      />
      <S.Content>
        <S.List>
          {todos.map((todo) => {
            return (
              <TaskItem 
                key={todo.id}
                id={todo.id}
                task={todo.task}
                isDone={todo.is_done}
              />
            )
          })}

        </S.List>
        {todoCounter > 0 && (
          <S.Footer>
            <span>{todoCounter} items left</span>
          </S.Footer>
          )}
      </S.Content>
    </Container>
    
  )
} 

export default App
