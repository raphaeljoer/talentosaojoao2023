import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShareStatus } from '../../../constants/share-status';

type ShareState = {
  status: ShareStatus;
};

const initialState: ShareState = {
  status: ShareStatus.INIT
};

export const shareSlice = createSlice({
  name: '@share',
  initialState,
  reducers: {
    setShareStatus: (draft, { payload }: PayloadAction<ShareStatus>) => {
      draft.status = payload;
    }
  }
});

export const { setShareStatus } = shareSlice.actions;
export const shareReducer = shareSlice.reducer;
