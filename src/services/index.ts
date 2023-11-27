import api from "./api";
import { TodoResponse } from "./types";

const getAllTodos = async (): Promise<TodoResponse[]> => {
  const response = (await (api.get('/todos'))).data;
  return response;
}

const getTodoByID = async (id: string): Promise<TodoResponse> => {
  const response = (await (api.get(`/todos/${id}`))).data;
  return response;
}

const createTodo = async (task: string): Promise<TodoResponse> => {
  const response = (await (api.post(`/todo`, {task, is_done: false}))).data;
  return response;
}

const markTodoAsDone = async (id: string): Promise<TodoResponse> => {
  const response = (await (api.put(`/todo/done/${id}`))).data;
  return response
}

const updateTodo = async (id: string, task: string, is_done: boolean): Promise<TodoResponse> => {
  const response = (await (api.put(`/todo/${id}`, { task, is_done }))).data;
  return response;
}

const deleteTodo = async (id: string): Promise<TodoResponse> => {
  const response = (await (api.delete(`/todo/${id}`))).data;
  return response;
}

export {
  getAllTodos,
  getTodoByID,
  createTodo,
  markTodoAsDone,
  updateTodo,
  deleteTodo
}
