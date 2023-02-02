import { createSlice } from '@reduxjs/toolkit';

export type OpenQueueState = {
    isOpen: boolean;
};

const initialState = {
    isOpen: false,
} as OpenQueueState;

const openQueueSlice = createSlice({
    name: 'openQueue',
    initialState: initialState,
    reducers: {
        setIsOpenQueue: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

export const { setIsOpenQueue } = openQueueSlice.actions;
export default openQueueSlice.reducer;
