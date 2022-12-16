import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShuffle,
    faBackwardStep,
    faPause,
    faForwardStep,
    faRepeat,
    faPlay,
    faHeart,
    faCirclePlus,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongPlaying.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SongPlaying() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('image')}>
                    <img src={images.defaultImg} alt="" />
                </div>
                <div className={cx('label')}>
                    <h4 className={cx('name')}>Episode 1: How to feel yourself</h4>
                    <span className={cx('singer')}>Love kit</span>
                </div>
            </div>
            <div className={cx('control')}>
                <div className={cx('control-btn')}>
                    <span className={cx('random')}>
                        <FontAwesomeIcon icon={faShuffle} />
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
                <div className={cx('timer')}>
                    <span className={cx('current-timer')}>0:00</span>
                    <div className={cx('custom-progress')}>
                        <div className={cx('progress-bar')} style={{ width: '10px' }}></div>
                        <div style={{ width: 0, height: 0 }}>
                            <audio src="" id="audio" preload="auto" style={{ width: '100%', height: '100%' }}></audio>
                        </div>
                    </div>
                    <span className={cx('total-timer')}>5:32</span>
                </div>
            </div>
            <div className={cx('right')}>
                <span className="heart">
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="add">
                    <FontAwesomeIcon icon={faCirclePlus} />
                </span>
                <span className={cx('volume')}>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                    <input className={cx('input')} type="range" min="0" max="1000" step="1" />
                </span>
            </div>
        </div>
    );
}

export default SongPlaying;
