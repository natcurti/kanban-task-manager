import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  dropTask,
  loadInitialTasks,
  updateTask,
} from "../reducers/tasks";
import { IRootState } from "..";
import { LocalStorage } from "@/utils/LocalStorage";
import { setColorMode } from "../reducers/colorMode";
import { loadInitialBoards } from "../reducers/boards";

export const listener = createListenerMiddleware();

listener.startListening({
  matcher: isAnyOf(
    loadInitialTasks,
    loadInitialBoards,
    addTask,
    dropTask,
    updateTask,
    deleteTask,
    setColorMode
  ),
  effect: (action, { getState }) => {
    const store: IRootState = getState() as IRootState;

    switch (action.type) {
      case loadInitialTasks.type:
      case addTask.type:
      case dropTask.type:
      case updateTask.type:
      case deleteTask.type:
        LocalStorage.setItemOnStorage("tasks", JSON.stringify(store.tasks));
        break;
      case setColorMode.type:
        LocalStorage.setItemOnStorage("theme", store.colorMode);
        break;
      case loadInitialBoards.type:
        LocalStorage.setItemOnStorage("boards", JSON.stringify(store.boards));
      default:
        break;
    }
  },
});
