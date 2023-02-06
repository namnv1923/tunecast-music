import { useCallback, useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ScaleLoader';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ZingChart.module.scss';
import ChartContent from '~/components/ZingChart/components/ChartContent';
import { getZingChartList } from '~/apis/zingchartApi';
import SongItem from '~/pages/ZingChart/components/SongItem';
import { SongQueueItemType } from '~/components/PlayerQueue';
import WeekChart from '~/pages/ZingChart/components/WeekChart';

const cx = classNames.bind(styles);

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
};

function ZingChart() {
    const { data, isLoading } = getZingChartList();
    const [isSeeMore, setIsSeeMore] = useState<boolean>(false);

    const handleSeeMore = useCallback(async () => {
        setIsSeeMore(true);
    }, []);

    return (
        <>
            {!isLoading ? (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('bg-blur')}></div>
                        <div className={cx('bg-alpha')}></div>
                        <div className={cx('bg-alpha-1')}></div>
                        <div className={cx('heading')}>
                            <h2 className={cx('title')}>#zingchart</h2>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </span>
                        </div>
                        {data && (
                            <div className={cx('chart')}>
                                <ChartContent id="my-chart" data={data?.RTChart} />
                            </div>
                        )}
                    </div>
                    <div className={cx('playlist')}>
                        <div className={cx('playlist-wrap')}>
                            {data &&
                                data?.RTChart?.items.map((item: SongQueueItemType, index: number) => {
                                    if (index >= 10 && !isSeeMore) {
                                        return;
                                    }
                                    return <SongItem key={index} index={index + 1} data={item} />;
                                })}
                        </div>
                    </div>
                    <div className={cx('see-more')}>
                        {data && !isSeeMore && (
                            <Button className={cx('button-see-more')} shape="round" onClick={handleSeeMore}>
                                Xem top 100
                            </Button>
                        )}
                    </div>
                    <div className={cx('week-chart')}>
                        <WeekChart weekChartData={data.weekChart} />
                    </div>
                </div>
            ) : (
                <div className={cx('scale-loader')}>
                    <ClipLoader
                        color={'#09c478'}
                        loading={isLoading}
                        cssOverride={override}
                        height={50}
                        width={5}
                        radius={6}
                        margin={2}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
        </>
    );
}

export default ZingChart;
