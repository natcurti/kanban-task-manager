import { ITask } from "@/types/ITask";
import { createSlice } from "@reduxjs/toolkit";
import { defaultTasks } from "../defaultTasks";

const initialState: ITask[] = defaultTasks;

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
