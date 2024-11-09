import { IBoard } from "@/types/IBoard";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IBoard[] = [];

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    loadInitialBoards: (_state, { payload }) => {
      return payload;
    },
    addBoard: (state, { payload }) => {
      state.push(payload);
    },
    turnBoardActive: (state, { payload }) => {
      state.forEach((board) => {
        if (board.name === payload) {
          board.isActive = true;
        } else {
          board.isActive = false;
        }
      });
    },
  },
});

export const { addBoard, turnBoardActive, loadInitialBoards } =
  boardsSlice.actions;

export default boardsSlice.reducer;
