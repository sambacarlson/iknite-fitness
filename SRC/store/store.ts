import {configureStore} from '@reduxjs/toolkit';
import uiControlReducer from '../slices/uiControlSlice';
import exerciseReducer from '../slices/exerciseSlice';

const store = configureStore({
  reducer: {
    uiControls: uiControlReducer,
    exercises: exerciseReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
