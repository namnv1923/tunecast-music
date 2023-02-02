import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TopZingChart.module.scss';
import TopZingChartItem from './TopZingChartItem';
import { SongQueueItemType } from '~/components/PlayerQueue';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

export type ArtistItemType = {
    id: string;
    name: string;
    link: string;
    alias: string;
    thumbnail: string;
    thumbnailM: string;
    playlistId: string;
    spotlight: boolean;
};

export type TopChartType = SongQueueItemType & { score: number };

type TopZingChartsType = {
    topZingCharts: TopChartType[];
};

function TopZingChart({ topZingCharts }: TopZingChartsType) {
    const ChartTop1 = topZingCharts[0] as TopChartType;
    const ChartTop2 = topZingCharts[1] as TopChartType;
    const ChartTop3 = topZingCharts[2] as TopChartType;

    const allScore = ChartTop1.score + ChartTop2.score + ChartTop3.score;

    return (
        <div className={cx('wrapper')}>
            <TopZingChartItem index={1} data={ChartTop1} allScore={allScore} />
            <TopZingChartItem index={2} data={ChartTop2} allScore={allScore} />
            <TopZingChartItem index={3} data={ChartTop3} allScore={allScore} />
            <div className={cx('button')}>
                <Link to={`${routes.zingchart}`} state={{ data: topZingCharts }}>
                    Xem thêm
                </Link>
            </div>
        </div>
    );
}

export default TopZingChart;
