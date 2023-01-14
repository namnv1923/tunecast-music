import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import NowPlaying from '~/components/NowPlaying';
import images from '~/assets/images';
import styles from './Queue.module.scss';

const cx = classNames.bind(styles);

function Queue() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>Notifications</h4>
            <div className={cx('playlist')}>
                <div className={cx('left')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                    </span>
                    <div className={cx('info')}>
                        <span className={cx('title')}>Playlist Added</span>
                        <span className={cx('number')}>106 songs</span>
                    </div>
                </div>
                <span className={cx('timer')}>2 Mins</span>
            </div>
            <div className={cx('playlist')}>
                <div className={cx('left')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                    </span>
                    <div className={cx('info')}>
                        <span className={cx('title')}>Playlist Added</span>
                        <span className={cx('number')}>106 songs</span>
                    </div>
                </div>
                <span className={cx('timer')}>2 Mins</span>
            </div>
            <NowPlaying />
            <div className={cx('artist')}>
                <h4 className={cx('label')}>Top Artists</h4>
                <div className={cx('artist-list')}>
                    <div className={cx('artist-item')}>
                        <img src={images.defaultArtist} alt="" />
                        <span className={cx('desc')}>Blink 182</span>
                    </div>
                    <div className={cx('artist-item')}>
                        <img src={images.defaultArtist} alt="" />
                        <span className={cx('desc')}>Blink 182</span>
                    </div>
                    <div className={cx('artist-item')}>
                        <img src={images.defaultArtist} alt="" />
                        <span className={cx('desc')}>Blink 182</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Queue;
