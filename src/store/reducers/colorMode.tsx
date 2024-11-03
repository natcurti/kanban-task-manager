import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState: "dark",
  reducers: {
    setColorMode: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        if (action.payload === "dark") {
          return "dark";
        } else {
          return "light";
        }
      } else {
        if (state === "dark") {
          return "light";
        } else {
          return "dark";
        }
      }
    },
  },
});

export const { setColorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;
