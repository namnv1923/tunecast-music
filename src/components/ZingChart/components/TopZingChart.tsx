import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TopZingChart.module.scss';
import TopZingChartItem from './TopZingChartItem';

const cx = classNames.bind(styles);

export interface TopChartType {
    encodeId: string;
    title: string;
    artistsNames: string;
    artists: {
        id: string;
        name: string;
        link: string;
        alias: string;
        thumbnail: string;
        thumbnailM: string;
        playlistId: string;
    }[];
    thumbnailM: string;
    thumbnail: string;
    score: number;
}

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
            <TopZingChartItem data={ChartTop1} allScore={allScore} />
            <TopZingChartItem data={ChartTop2} allScore={allScore} />
            <TopZingChartItem data={ChartTop3} allScore={allScore} />
            <div className={cx('button')}>
                <Link to="/">Xem thêm</Link>
            </div>
        </div>
    );
}

export default TopZingChart;
