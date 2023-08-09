import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  addMode: false,
  editMode: false,
  optiionsMode: false,
};

const overlaysSlice = createSlice({
  name: "overlays",
  initialState,
  reducers: {
    setAddMode(state, action: PayloadAction<boolean>) {
      state.addMode = action.payload;
    },
    setEditMode(state, action: PayloadAction<boolean>) {
      state.editMode = action.payload;
    },
    setOptionsMode(state, action: PayloadAction<boolean>) {
      state.optiionsMode = action.payload;
    },
  },
});

export const { setAddMode, setEditMode, setOptionsMode } =
  overlaysSlice.actions;

export default overlaysSlice.reducer;
