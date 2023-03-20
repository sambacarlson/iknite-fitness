import {createSlice} from '@reduxjs/toolkit';

type exerciseType = {
  exID: string;
  exTitle: string;
  exCategory: string[];
  exDuration: number;
  exRest: number;
  exMotive: string;
  exSteps: string[];
  exImages: string[];
};

const initialState = [] as exerciseType[];

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    downloadExercises: (state, action) => {
      state = action.payload;
    },
  },
});

export default exerciseSlice.reducer;
export const {downloadExercises} = exerciseSlice.actions;
