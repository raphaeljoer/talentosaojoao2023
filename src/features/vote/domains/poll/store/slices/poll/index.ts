import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PollStatus } from 'features/vote/domains/poll/constants/poll-status';

type PollState = {
  status: PollStatus;
};

const initialState: PollState = {
  status: PollStatus.IDLE
};

export const pollSlice = createSlice({
  name: '@poll',
  initialState,
  reducers: {
    setPollStatus: (draft, { payload }: PayloadAction<PollStatus>) => {
      draft.status = payload;
    }
  }
});

export const { setPollStatus } = pollSlice.actions;
export const pollReducer = pollSlice.reducer;
