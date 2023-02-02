import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongQueueItemType } from '~/components/PlayerQueue';

export type SongPlaySliceState = {
    currentTime: number;
    currentSongPlay: SongQueueItemType;
    recentSongPlayList: SongQueueItemType[];
};

const initialState: SongPlaySliceState = {
    currentTime: 0,
    currentSongPlay: {
        album: {
            title: '',
        },
        alias: '',
        artists: [],
        artistsNames: '',
        duration: 0,
        encodeId: '',
        genreIds: [],
        hasLyric: true,
        releaseDate: 0,
        streamingStatus: 0,
        thumbnail: '',
        thumbnailM: '',
        title: '',
        zingChoice: false,
        rakingStatus: 0,
    },
    recentSongPlayList: [],
};

const songPlaySlice = createSlice({
    name: 'song-play',
    initialState: initialState,
    reducers: {
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setCurrentSongPlay: (state, action: PayloadAction<SongQueueItemType>) => {
            state.currentSongPlay = action.payload;
            // localStorage.setItem('tc_lastestSongPlay', JSON.stringify(state));
        },
        pushRecentSongPlayList: (state, action: PayloadAction<SongQueueItemType>) => {
            const isExists = state.recentSongPlayList.find(
                (item: SongQueueItemType) => item.encodeId === action.payload.encodeId,
            );
            if (!isExists) {
                state.recentSongPlayList.unshift(action.payload);
            }
        },
    },
});

export const { setCurrentTime, setCurrentSongPlay, pushRecentSongPlayList } = songPlaySlice.actions;
export default songPlaySlice.reducer;
