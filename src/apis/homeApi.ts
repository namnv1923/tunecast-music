import { useQuery } from '@tanstack/react-query';
import apiInstance from '~/apis';

export enum HomePath {
    HomePage = '/home',
}

export const getGallery = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(
        ['gallery'],
        async () => {
            const data = await apiInstance.get(HomePath.HomePage);
            return data.data.items.find((item: any) => item.sectionType === 'banner').items;
        },
        { keepPreviousData: true },
    );
};

export const getNewRelease = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['new-release'], async () => {
        const data = await apiInstance.get(HomePath.HomePage);
        return data.data.items.find((item: any) => item.sectionType === 'new-release').items;
    });
};

export const getNewAlbum = (sectionId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['new-album'], async () => {
        const data = await apiInstance.get(HomePath.HomePage);
        return data.data.items.find((item: any) => item.sectionType === 'playlist' && item.sectionId === sectionId)
            .items;
    });
};

export const getZingChart = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['zing-chart'], async () => {
        const data = await apiInstance.get(HomePath.HomePage);
        return data.data.items.find((item: any) => item.sectionType === 'RTChart');
    });
};

export const getWeekChart = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['week-chart'], async () => {
        const data = await apiInstance.get(HomePath.HomePage);
        return data.data.items.find((item: any) => item.sectionType === 'weekChart').items;
    });
};

export const getTop100 = (sectionId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['top-100'], async () => {
        const data = await apiInstance.get(HomePath.HomePage);
        return data.data.items.find((item: any) => item.sectionType === 'playlist' && item.sectionId === sectionId)
            .items;
    });
};
