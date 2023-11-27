import { TodoResponse } from "../../services/types";
import { ReactNode } from "react";

export interface OwnProps {
  children: ReactNode
}

export interface IToDo {
  task: string;
  is_done: boolean;
  id: string;
}

export interface ITodoContext {
  todos: TodoResponse[];
  addToDo: (todo: string) => void;
  deleteToDo: (id: string) => void;
  getAllToDos: () => void;
  updateToDo: (id: string) => void;
  todoCounter: number;
}

export const DEFAULT_VALUE: ITodoContext = {
  addToDo: () => null,
  deleteToDo: () => null,
  getAllToDos: () => null,
  updateToDo: () => null,
  todos: [],
  todoCounter: 0
};
