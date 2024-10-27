import { ITask } from "@/types/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

const selectedTaskSlice = createSlice({
  name: "selectedTask",
  initialState,
  reducers: {
    selectTask: (_state, { payload }) => {
      return payload;
    },
    cleanSelectTask: () => initialState,
  },
});

export const { selectTask, cleanSelectTask } = selectedTaskSlice.actions;

export default selectedTaskSlice.reducer;
