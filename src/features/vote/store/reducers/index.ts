import { combineReducers } from '@reduxjs/toolkit';
import { pollReducer } from 'features/vote/domains/poll';
import { shareReducer } from 'features/vote/domains/share';

export const voteReducer = combineReducers({
  poll: pollReducer,
  share: shareReducer
});
