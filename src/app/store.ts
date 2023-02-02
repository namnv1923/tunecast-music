import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import songPlayReducer from '~/redux/slices/songPlaySlice';
import settingsSongSlice from '~/redux/slices/settingsSongSlice';
import openQueueSlice from '~/redux/slices/openQueueSlice';

export const store = configureStore({
    reducer: {
        songPlay: songPlayReducer,
        settings: settingsSongSlice,
        openQueue: openQueueSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
