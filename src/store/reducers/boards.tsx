import { IBoard } from "@/types/IBoard";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: IBoard[] = [
  {
    name: "Default Board",
    id: uuidv4(),
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
