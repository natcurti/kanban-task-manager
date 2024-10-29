import { Theme } from "@/types/Theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setColorMode: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.colorMode = action.payload === "dark" ? Theme.dark : Theme.light;
      } else {
        state.colorMode =
          state.colorMode === Theme.dark ? Theme.light : Theme.dark;
      }
    },
  },
});

export const { setColorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;
