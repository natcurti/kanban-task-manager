import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./reducers/navBar";
import colorModeSlice from "./reducers/colorMode";
import modalTaskSlice from "./reducers/modalTask";
import modalBoardSlice from "./reducers/modalBoard";
import tasksSlice from "./reducers/tasks";
import boardsSlice from "./reducers/boards";
import selectedTaskSlice from "./reducers/selectedTask";
import taskToEditSlice from "./reducers/taskToEdit";
import boardToEditSlice from "./reducers/boardToEdit";
import dataLoadedSlice from "./reducers/dataLoaded";
import { listener } from "./middleware/localStorageMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navBar: navBarSlice,
      colorMode: colorModeSlice,
      modalTask: modalTaskSlice,
      modalBoard: modalBoardSlice,
      tasks: tasksSlice,
      boards: boardsSlice,
      selectedTask: selectedTaskSlice,
      taskToEdit: taskToEditSlice,
      boardToEdit: boardToEditSlice,
      dataLoaded: dataLoadedSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listener.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type IRootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
