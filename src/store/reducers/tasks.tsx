import { ITask } from "@/types/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log(state, payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
