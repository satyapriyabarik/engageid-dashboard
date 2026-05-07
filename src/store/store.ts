import { configureStore } from '@reduxjs/toolkit';

import notificationReducer from '../redux/slices/notificationSlice';
import aiReducer from '../redux/slices/aiSlice';
import searchReducer from '../redux/slices/searchSlice';
import OpportunityReducer from '../redux/slices/opportunitySlice';
export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    ai: aiReducer,
    search: searchReducer,
    opportunities:OpportunityReducer,
  },
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;