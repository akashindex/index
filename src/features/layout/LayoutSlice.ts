import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface LayoutState {
  sections: string[];
  currentSection: number;
}

const initialState: LayoutState = {
  sections: ["home", "projects", "contact"],
  currentSection: 0,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentSection: (state, action: PayloadAction<number>) => {
      if (action.payload < state.sections.length && action.payload >= 0) {
        state.currentSection = action.payload;
        // eslint-disable-next-line no-restricted-globals
        location.hash = "#" + state.sections[state.currentSection];
      }
    },
  },
});

export const { setCurrentSection } = layoutSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.layout.value)`
export const selectCurrentSection = (state: RootState) =>
  state.layout.sections[state.layout.currentSection];

export default layoutSlice.reducer;
