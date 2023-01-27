import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import songPlayReducer from '~/redux/slices/songPlaySlice';
import settingsSlice from '~/redux/slices/settingsSlice';

export const store = configureStore({
    reducer: {
        songPlay: songPlayReducer,
        settings: settingsSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
