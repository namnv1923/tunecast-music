import { useQuery } from '@tanstack/react-query';
import apiInstance from '~/apis';

export enum PlaylistPath {
    DEFAULT = '/playlist',
}

export const getPlaylist = (id: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['playlist'], async () => {
        const data = await apiInstance.get(`${PlaylistPath.DEFAULT}/${id}`);
        return data.data.song.items;
    });
};
