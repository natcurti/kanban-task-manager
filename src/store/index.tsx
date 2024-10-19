import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./reducers/navBar";
import colorModeSlice from "./reducers/colorMode";
import modalSlice from "./reducers/modal";
import tasksSlice from "./reducers/tasks";

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    colorMode: colorModeSlice,
    modal: modalSlice,
    tasks: tasksSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
