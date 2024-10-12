import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    setModalOpen: (state) => {
      return !state;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
