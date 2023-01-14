import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './PlayerQueue.module.scss';

const cx = classNames.bind(styles);

function PlayerQueue({ item }: any) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img')}>
                    <img src={item.thumbnail} alt="" />
                    <div className={cx('overlay')}>
                        <span>
                            <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        </span>
                    </div>
                </div>
                <div className={cx('info')}>
                    <span className={cx('music')}>{item.title}</span>
                    <span className={cx('singer')}>{item.artistsNames}</span>
                    <span className={cx('time')}>4 ngày trước</span>
                </div>
            </div>
            <div className={cx('control')}>
                <span className={cx('favourite')}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className={cx('more')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </span>
            </div>
        </div>
    );
}

export default PlayerQueue;
