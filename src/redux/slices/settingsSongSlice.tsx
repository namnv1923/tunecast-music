import { createSlice } from '@reduxjs/toolkit';

export type SettingsState = {
    volumeValue: number;
    isPlaying: boolean;
    isActive: boolean;
    isMute: boolean;
};

const initialState = {
    volumeValue: 50,
    isPlaying: false,
    isActive: false,
    isMute: false,
} as SettingsState;

const settingsSongSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        setVolumeValue: (state, action) => {
            state.volumeValue = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        },
        setIsMute: (state, action) => {
            state.isMute = action.payload;
        },
    },
});

export const { setVolumeValue, setIsPlaying, setIsActive, setIsMute } = settingsSongSlice.actions;
export default settingsSongSlice.reducer;
