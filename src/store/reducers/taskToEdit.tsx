import { ITask } from "@/types/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

const taskToEditSlice = createSlice({
  name: "taskToEdit",
  initialState,
  reducers: {
    selectTaskToEdit: (state, { payload }) => {
      state.push(payload);
    },
    clearTaskToEdit: () => initialState,
  },
});

export const { selectTaskToEdit, clearTaskToEdit } = taskToEditSlice.actions;

export default taskToEditSlice.reducer;
