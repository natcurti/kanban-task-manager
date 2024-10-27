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
    dropTask: (state, { payload }) => {
      const taskIndex = state.findIndex(
        (task) => task.name === payload.task.name
      );
      state.splice(taskIndex, 1);

      const updatedTask: ITask = {
        name: payload.task.name,
        boardId: payload.task.boardId,
        status: payload.section,
        tags: payload.task.tags,
        cover: payload.task.cover,
      };

      state.push(updatedTask);
    },
  },
});

export const { addTask, dropTask } = tasksSlice.actions;

export default tasksSlice.reducer;
