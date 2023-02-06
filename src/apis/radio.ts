import { useQuery } from '@tanstack/react-query';
import apiInstance from '~/apis';

export enum RadioPath {
    DEFAULT = '/radio',
}

export const getRadioData = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['radio'], async () => {
        const data = await apiInstance.get(RadioPath.DEFAULT);
        if (data) {
            return data.data.items;
        } else {
            throw new Error('Error fetch data');
        }
    });
};
