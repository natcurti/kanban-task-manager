import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./reducers/navBar";
import colorModeSlice from "./reducers/colorMode";
import modalTaskSlice from "./reducers/modalTask";
import modalBoardSlice from "./reducers/modalBoard";
import tasksSlice from "./reducers/tasks";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navBar: navBarSlice,
      colorMode: colorModeSlice,
      modalTask: modalTaskSlice,
      modalBoard: modalBoardSlice,
      tasks: tasksSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type IRootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
