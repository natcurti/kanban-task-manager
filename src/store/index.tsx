import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./reducers/navBar";
import colorModeSlice from "./reducers/colorMode";
import modalSlice from "./reducers/modal";

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    colorMode: colorModeSlice,
    modal: modalSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
