import { Theme } from "@/types/theme";
import { createSlice } from "@reduxjs/toolkit";

interface IColorModeState {
  colorMode: Theme;
}

const initialState: IColorModeState = {
  colorMode: Theme.dark,
};

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setColorMode: (state) => {
      state.colorMode =
        state.colorMode === Theme.dark ? Theme.light : Theme.dark;
    },
  },
});

export const { setColorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;
