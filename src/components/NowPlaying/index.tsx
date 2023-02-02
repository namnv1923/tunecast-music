import { useLayoutEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faBackwardStep, faForwardStep, faPlay, faPause, faRepeat } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NowPlaying.module.scss';
import images from '~/assets/images';
import { useAppSelector, useAppDispatch } from '~/app/hooks';
import { setIsPlaying } from '~/redux/slices/settingsSongSlice';
import formatTime from '~/utils/formatTime';

const cx = classNames.bind(styles);

function NowPlaying() {
    const dispatch = useAppDispatch();
    const progressBarRef = useRef<any>(null);
    const { isPlaying } = useAppSelector((state: any) => state.settings);
    const { currentTime, currentSongPlay } = useAppSelector((state: any) => state.songPlay);

    useLayoutEffect(() => {
        progressBarRef.current.style.width = `${
            (Math.floor(currentTime) / Math.floor(currentSongPlay.duration)) * 100
        }%`;
    }, [currentTime, currentSongPlay.duration]);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Playing Now</h3>
            <div className={cx('image')}>
                <img src={currentSongPlay.thumbnailM || images.defaultThumb} alt="" />
            </div>
            <div className={cx('timer')}>
                <span className={cx('current-timer')}>{formatTime(currentTime)}</span>
                <div className={cx('custom-progress')}>
                    <div ref={progressBarRef} className={cx('progress-bar')} style={{ width: '0px' }}></div>
                </div>
                <span className={cx('total-timer')}>{currentSongPlay && formatTime(currentSongPlay.duration)}</span>
            </div>
            <div className={cx('control')}>
                <span className={cx('random')}>
                    <FontAwesomeIcon icon={faRandom} />
                </span>
                <span className={cx('back')}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </span>
                <span
                    className={cx('play')}
                    onClick={() => (isPlaying ? dispatch(setIsPlaying(false)) : dispatch(setIsPlaying(true)))}
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
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
