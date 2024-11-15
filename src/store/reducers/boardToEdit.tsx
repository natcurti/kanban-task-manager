import { IBoard } from "@/types/IBoard";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IBoard[] = [];

const boardToEditSlice = createSlice({
  name: "boardToEdit",
  initialState,
  reducers: {
    selectBoardToEdit: (state, { payload }) => {
      state.push(payload);
    },
    clearBoardToEdit: () => initialState,
  },
});

export const { selectBoardToEdit, clearBoardToEdit } = boardToEditSlice.actions;

export default boardToEditSlice.reducer;
