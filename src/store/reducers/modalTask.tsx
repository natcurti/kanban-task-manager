import { createSlice } from "@reduxjs/toolkit";

const modalTaskSlice = createSlice({
  name: "modalTask",
  initialState: false,
  reducers: {
    setModalTaskOpen: (state) => {
      return !state;
    },
  },
});

export const { setModalTaskOpen } = modalTaskSlice.actions;

export default modalTaskSlice.reducer;
