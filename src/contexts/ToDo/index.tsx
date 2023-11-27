import { FunctionComponent, createContext, useState } from "react";
import { DEFAULT_VALUE, ITodoContext, OwnProps } from "./types";
import { createTodo, deleteTodo, getAllTodos, markTodoAsDone,  } from '../../services/index';
import { TodoResponse } from "../../services/types";

export const ToDoContext = createContext<ITodoContext>(DEFAULT_VALUE);

const ToDoProvider: FunctionComponent<OwnProps> = ({ children }) => {
  const [todos, setToDos] = useState<TodoResponse[] | []>([]);
  const [todoCounter, setTodoCounter] = useState<number>(0);

  const getAllToDos = async  () =>{
    const localTasks = await getAllTodos();
    console.log(localTasks)
    setToDos(localTasks);
    setTodoCounter(localTasks.length);
  };

  const addToDo = async (todo: string) => {
    if (todo) {
      const newTaskResponse = await createTodo(todo);
      setToDos([...todos, newTaskResponse]);
    }
  };

  const deleteToDo = async (id: string) => {
    try {
      await deleteTodo(id);
      setToDos(todos.filter((todo) => todo.id !== id));
    } catch (e) {
      alert('error!');
    }
  };

  const updateToDo = async (id: string) => {
    try {
      await markTodoAsDone(id);
    }catch(e){
      console.error(e);
    }
  }

  return (
    <ToDoContext.Provider 
      value={{ 
        todos, 
        addToDo, 
        deleteToDo, 
        getAllToDos, 
        updateToDo,
        todoCounter
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
