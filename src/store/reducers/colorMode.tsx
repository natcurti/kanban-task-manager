import { LocalStorage } from "@/utils/LocalStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IColorModeState {
  colorMode: string;
}

const initialState: IColorModeState = {
  colorMode: LocalStorage.getItemFromStorage("theme") || "dark",
};

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setColorMode: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.colorMode = action.payload === "dark" ? "dark" : "light";
      } else {
        state.colorMode = state.colorMode === "dark" ? "light" : "dark";
      }
    },
  },
});

export const { setColorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;
