import classNames from 'classnames/bind';
import styles from './WeekChart.module.scss';
import { SongQueueItemType } from '~/components/PlayerQueue';
import WeekChartCol from './WeekChartCol';

const cx = classNames.bind(styles);

type WeekChartProps = {
    weekChartData: {
        vn: {
            items: SongQueueItemType[];
        };
        us: {
            items: SongQueueItemType[];
        };
        korea: {
            items: SongQueueItemType[];
        };
    };
};

function WeekChart({ weekChartData }: WeekChartProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-blur')}></div>
            <div className={cx('bg-alpha')}></div>
            <h4 className={cx('title')}>Bảng Xếp Hạng Tuần</h4>
            <div className={cx('wrapper-colum')}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-4">
                            <WeekChartCol data={weekChartData.vn.items} kind="Việt Nam" />
                        </div>
                        <div className="col l-4">
                            <WeekChartCol data={weekChartData.us.items} kind="US-UK" />
                        </div>
                        <div className="col l-4">
                            <WeekChartCol data={weekChartData.korea.items} kind="K-Pop" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeekChart;
