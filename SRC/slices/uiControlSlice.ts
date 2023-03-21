import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface uiControlStateProp {
  currentExID: string;
}

const initialState = {
  currentExID: '1',
} as uiControlStateProp;

const uiControlSlice = createSlice({
  name: 'uiControls',
  initialState,
  reducers: {
    setCurrentExID: (state, action: PayloadAction<string>) => {
      state.currentExID = action.payload;
    },
  },
});

export default uiControlSlice.reducer;
export const {setCurrentExID} = uiControlSlice.actions;
