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
import {
  addBoard,
  deleteBoard,
  loadInitialBoards,
  updateBoard,
} from "../reducers/boards";

export const listener = createListenerMiddleware();

listener.startListening({
  matcher: isAnyOf(
    loadInitialTasks,
    addTask,
    dropTask,
    updateTask,
    deleteTask,
    setColorMode,
    loadInitialBoards,
    addBoard,
    updateBoard,
    deleteBoard
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
      case addBoard.type:
      case updateBoard.type:
      case deleteBoard.type:
        LocalStorage.setItemOnStorage("boards", JSON.stringify(store.boards));
      default:
        break;
    }
  },
});
