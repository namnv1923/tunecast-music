import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ZingChart.module.scss';
import ChartContent from '~/components/ZingChart/components/ChartContent';
import { getZingChartList } from '~/apis/zingchartApi';
import SongItem from '~/pages/ZingChart/components/SongItem';
import { SongQueueItemType } from '~/components/PlayerQueue';

const cx = classNames.bind(styles);

function ZingChart() {
    const { data, status } = getZingChartList();

    return (
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
                        <ChartContent id="my-chart" data={data} />
                    </div>
                )}
            </div>
            <div className={cx('playlist')}>
                {data &&
                    data?.items.map((item: SongQueueItemType, index: number) => (
                        <SongItem key={item.encodeId} index={index + 1} data={item} />
                    ))}
            </div>
        </div>
    );
}

export default ZingChart;
