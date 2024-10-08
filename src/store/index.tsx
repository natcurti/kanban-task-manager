import { configureStore } from "@reduxjs/toolkit";
import navBar from "./reducers/navBar";

const store = configureStore({
  reducer: {
    navBar,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
