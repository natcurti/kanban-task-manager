import { createSlice } from "@reduxjs/toolkit";

const modalBoardSlice = createSlice({
  name: "modalBoard",
  initialState: false,
  reducers: {
    setModalBoardOpen: (state) => {
      return !state;
    },
  },
});

export const { setModalBoardOpen } = modalBoardSlice.actions;

export default modalBoardSlice.reducer;
