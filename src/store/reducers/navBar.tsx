import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: "navbar",
  initialState: false,
  reducers: {
    setIsOpen: (state) => {
      return !state;
    },
  },
});

export const { setIsOpen } = navBarSlice.actions;

export default navBarSlice.reducer;
