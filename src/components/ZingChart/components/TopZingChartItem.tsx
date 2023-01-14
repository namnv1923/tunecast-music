import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TopZingChart.module.scss';
import { TopChartType } from './TopZingChart';

const cx = classNames.bind(styles);

function TopZingChartItem({ data, allScore }: { data: TopChartType; allScore: number }) {
    return (
        <div className={cx('item')}>
            <div className={cx('left')}>
                <span className={cx('level')}>1</span>
                <div className={cx('wrap-image')}>
                    <img src={data.thumbnailM} alt={data.artistsNames} />
                    <div className={cx('overlay')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faPlay} />
                        </span>
                    </div>
                </div>
                <div className={cx('info')}>
                    <span className={cx('name')}>{data.title}</span>
                    <span className={cx('singer')}>
                        <Link to="/">{data.artistsNames}</Link>
                    </span>
                </div>
            </div>
            <div className={cx('right')}>
                <span className={cx('percen')}>{`${Math.round((data.score / allScore) * 100)}%`}</span>
            </div>
        </div>
    );
}

export default TopZingChartItem;
