import { useQuery } from '@tanstack/react-query';
import apiInstance from '~/apis';

export enum ZingChartPath {
    DEFAULT = '/homechart',
}

export const getZingChartList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['zingchart-list'], async () => {
        const data = await apiInstance.get(ZingChartPath.DEFAULT);
        return data.data;
    });
};
