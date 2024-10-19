import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./reducers/navBar";
import colorModeSlice from "./reducers/colorMode";
import modalSlice from "./reducers/modal";
import tasksSlice from "./reducers/tasks";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navBar: navBarSlice,
      colorMode: colorModeSlice,
      modal: modalSlice,
      tasks: tasksSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type IRootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
