import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  currentExID: 1,
  isResting: false,
};

const uiControlSlice = createSlice({
  name: 'uiControls',
  initialState,
  reducers: {
    setCurrentExID: (state, action: PayloadAction<number>) => {
      state.currentExID = action.payload;
    },
    setIsResting: (state, action: PayloadAction<boolean>) => {
      state.isResting = action.payload;
    },
  },
});

export default uiControlSlice.reducer;
export const {setCurrentExID, setIsResting} = uiControlSlice.actions;
