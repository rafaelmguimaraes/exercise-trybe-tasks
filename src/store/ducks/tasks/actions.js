import { TasksTypes } from "./types";

export const addTask = (task) => ({
  type: TasksTypes.ADD,
  payload: task
});

export const editTasks = (id) => ({
  type: TasksTypes.EDIT,
  payload: id
});

export const deleteTask = (id) => ({
  type: TasksTypes.DELETE,
  payload: id
});
