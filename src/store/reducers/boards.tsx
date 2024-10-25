import { IBoard } from "@/types/IBoard";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IBoard[] = [
  {
    name: "Default Board",
    id: "1",
    slug: "default-board",
    icon: "/assets/books.png",
    isActive: true,
  },
];

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
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

export const { addBoard, turnBoardActive } = boardsSlice.actions;

export default boardsSlice.reducer;
