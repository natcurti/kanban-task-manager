import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksLoaded: false,
  boardsLoaded: false,
};

const dataLoadedSlice = createSlice({
  name: "dataLoaded",
  initialState,
  reducers: {
    setTasksLoaded: (state) => {
      state.tasksLoaded = true;
    },
    setBoardsLoaded: (state) => {
      state.boardsLoaded = true;
    },
  },
});

export const { setTasksLoaded, setBoardsLoaded } = dataLoadedSlice.actions;

export default dataLoadedSlice.reducer;
