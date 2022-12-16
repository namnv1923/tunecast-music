import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faBackwardStep, faForwardStep, faPlay, faRepeat } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NowPlaying.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function NowPlaying() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Playing Now</h3>
            <div className={cx('image')}>
                <img src={images.defaultThumb} alt="" />
            </div>
            <div className={cx('timer')}>
                <span className={cx('current-timer')}>0:00</span>
                <div className={cx('custom-progress')}>
                    <div className={cx('progress-bar')} style={{ width: '10px' }}></div>
                </div>
                <span className={cx('total-timer')}>3:23</span>
            </div>
            <div className={cx('control')}>
                <span className={cx('random')}>
                    <FontAwesomeIcon icon={faRandom} />
                </span>
                <span className={cx('back')}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </span>
                <span className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className={cx('next')}>
                    <FontAwesomeIcon icon={faForwardStep} />
                </span>
                <span className={cx('repeat')}>
                    <FontAwesomeIcon icon={faRepeat} />
                </span>
            </div>
        </div>
    );
}

export default NowPlaying;
