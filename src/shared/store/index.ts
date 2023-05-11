import { configureStore } from '@reduxjs/toolkit';
import { voteReducer } from 'features/vote';

export const store = configureStore({
  reducer: {
    vote: voteReducer
  }
});
