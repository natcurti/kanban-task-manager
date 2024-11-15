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
    updateBoard: (state, { payload }) => {
      const boardIndex = state.findIndex((board) => board.id === payload.id);
      state.splice(boardIndex, 1, payload);
    },
    deleteBoard: (state, { payload }) => {
      const boardIndex = state.findIndex((board) => board.id === payload.id);
      state.splice(boardIndex, 1);
    },
  },
});

export const { addBoard, loadInitialBoards, updateBoard, deleteBoard } =
  boardsSlice.actions;

export default boardsSlice.reducer;
