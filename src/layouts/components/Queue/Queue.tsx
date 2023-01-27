import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import NowPlaying from '~/components/NowPlaying';
import images from '~/assets/images';
import styles from './Queue.module.scss';
import { AlarmIcon } from '~/components/Icons';
import PlayListContinue from '~/components/PlayListContinue';

const cx = classNames.bind(styles);

function Queue() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h4 className={cx('label')}>Notifications</h4>
                <div className={cx('options')}>
                    <span className={cx('timer')}>
                        <AlarmIcon width="1.6rem" height="1.6rem" />
                    </span>
                    <span className={cx('more')}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                </div>
            </div>
            <NowPlaying />
            <div className={cx('playlist-continue')}>
                <h3 className={cx('title')}>Tiếp theo</h3>
                <PlayListContinue />
            </div>
        </div>
    );
}

export default Queue;
