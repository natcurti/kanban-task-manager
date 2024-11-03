import { ITask } from "@/types/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadInitialTasks: (_state, { payload }) => {
      return payload;
    },
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
        id: payload.task.id,
        boardId: payload.task.boardId,
        status: payload.section,
        tags: payload.task.tags,
        cover: payload.task.cover,
      };

      state.push(updatedTask);
    },
    updateTask: (state, { payload }) => {
      const taskIndex = state.findIndex((task) => task.id === payload.id);
      state.splice(taskIndex, 1, payload);
    },
    deleteTask: (state, { payload }) => {
      const taskIndex = state.findIndex((task) => task.id === payload);
      state.splice(taskIndex, 1);
    },
  },
});

export const { loadInitialTasks, addTask, dropTask, updateTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
