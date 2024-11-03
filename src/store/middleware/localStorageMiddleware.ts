import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  loadInitialTasks,
  updateTask,
} from "../reducers/tasks";
import { IRootState } from "..";
import { LocalStorage } from "@/utils/LocalStorage";

export const listener = createListenerMiddleware();

listener.startListening({
  matcher: isAnyOf(loadInitialTasks, addTask, updateTask, deleteTask),
  effect: (_action, { getState }) => {
    const store: IRootState = getState() as IRootState;
    LocalStorage.setItemOnStorage("tasks", JSON.stringify(store.tasks));
  },
});
