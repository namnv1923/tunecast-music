import { createSlice } from '@reduxjs/toolkit';

export type SettingsState = {
    isPlaying: boolean;
    isActive: boolean;
};

const initialState = {
    isPlaying: false,
    isActive: false,
} as SettingsState;

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        },
    },
});

export const { setIsPlaying, setIsActive } = settingsSlice.actions;
export default settingsSlice.reducer;
