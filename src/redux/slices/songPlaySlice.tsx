import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SongQueueItemType } from '~/components/PlayerQueue';
import apiInstance from '~/apis';

const fetchPlaylist = createAsyncThunk('songPlaySlice/fetchPlaylist', async (id: string) => {
    const data = await apiInstance.get(`playlist/${id}`);
    return data.data.song.items.filter((item: SongQueueItemType) => item.streamingStatus === 1);
});

export type SongPlaySliceState = {
    currentTime: number;
    currentIndex: number;
    currentSongPlay: SongQueueItemType;
    recentSongPlayList: SongQueueItemType[];
    songPlaylist: SongQueueItemType[];
};

const initialState: SongPlaySliceState = {
    currentTime: 0,
    currentIndex: 0,
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
    songPlaylist: [],
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
        setCurrentIndex: (state, action) => {
            const findSong: SongQueueItemType | undefined = state.songPlaylist.find(
                (item) => item.encodeId === action.payload,
            );
            if (findSong) {
                state.currentIndex = state.songPlaylist.indexOf(findSong);
            }
        },
        setNextSongPlay: (state) => {
            state.currentIndex++;
            state.currentSongPlay = state.songPlaylist[state.currentIndex];
        },
        setBackSongPlay: (state) => {
            const findSong: SongQueueItemType | undefined = state.songPlaylist.find(
                (item) => item.encodeId === state.currentSongPlay.encodeId,
            );
            if (findSong) {
                state.currentIndex = state.songPlaylist.indexOf(findSong);
            }
            state.currentIndex--;
            state.currentSongPlay = state.songPlaylist[state.currentIndex];
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
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
            if (action.payload !== state.songPlaylist) {
                state.songPlaylist = action.payload;
            }
        });
    },
});

export const {
    setCurrentTime,
    setCurrentSongPlay,
    setCurrentIndex,
    setNextSongPlay,
    setBackSongPlay,
    pushRecentSongPlayList,
} = songPlaySlice.actions;
export { fetchPlaylist };
export default songPlaySlice.reducer;
