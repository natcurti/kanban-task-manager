import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  loadInitialTasks,
  updateTask,
} from "../reducers/tasks";
import { IRootState } from "..";
import { LocalStorage } from "@/utils/LocalStorage";
import { setColorMode } from "../reducers/colorMode";

export const listener = createListenerMiddleware();

listener.startListening({
  matcher: isAnyOf(
    loadInitialTasks,
    addTask,
    updateTask,
    deleteTask,
    setColorMode
  ),
  effect: (action, { getState }) => {
    const store: IRootState = getState() as IRootState;

    switch (action.type) {
      case loadInitialTasks.type:
      case addTask.type:
      case updateTask.type:
      case deleteTask.type:
        LocalStorage.setItemOnStorage("tasks", JSON.stringify(store.tasks));
        break;
      case setColorMode.type:
        LocalStorage.setItemOnStorage("theme", store.colorMode);
        break;
      default:
        break;
    }
  },
});
