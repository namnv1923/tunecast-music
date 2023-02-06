import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './WeekChart.module.scss';
import { SongQueueItemType } from '~/components/PlayerQueue';
import SongItem from '~/pages/ZingChart/components/SongItem';

const cx = classNames.bind(styles);

type WeekChartProps = {
    data?: SongQueueItemType[];
    kind?: string;
};

function WeekChartCol({ data, kind }: WeekChartProps) {
    return (
        <div className={cx('colum')}>
            <div className={cx('colum-heading')}>
                <span className={cx('colum-title')}>{kind}</span>
                <span className={cx('colum-icon')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </span>
            </div>
            <div className={cx('playlist')}>
                {data &&
                    data.map((item: SongQueueItemType, index: number) => {
                        if (index >= 5) {
                            return;
                        }
                        return <SongItem key={index} data={item} index={index + 1} size="small" />;
                    })}
            </div>
            <div className={cx('see-more')}>
                {data && (
                    <Button className={cx('button-see-more')} shape="round">
                        Xem tất cả
                    </Button>
                )}
            </div>
        </div>
    );
}

export default WeekChartCol;
