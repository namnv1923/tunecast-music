import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
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
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { setCurrentTime } from '~/redux/slices/songPlaySlice';
import { setIsPlaying } from '~/redux/slices/settingsSlice';
import formatTime from '~/utils/formatTime';

const cx = classNames.bind(styles);

function SongPlaying() {
    const dispatch = useAppDispatch();
    const audioRef = useRef<ReactPlayer>(null);
    const progressBarRef = useRef<any>(null);

    const { isPlaying } = useAppSelector((state: any) => state.settings);
    const { currentTime, currentSongPlay } = useAppSelector((state: any) => state.songPlay);

    const handlePlay = () => {};

    const handleRunProgressBar = () => {
        if (progressBarRef.current && audioRef.current) {
            progressBarRef.current.style.width = `${
                (Math.floor(audioRef.current?.getCurrentTime()) / Math.floor(audioRef.current?.getDuration())) * 100
            }%`;
            dispatch(setCurrentTime(Math.floor(audioRef.current?.getCurrentTime())));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('image')}>
                    <img src={currentSongPlay.thumbnail || images.defaultImg} alt="" />
                </div>
                <div className={cx('label')}>
                    <h4 className={cx('name')}>{currentSongPlay.title}</h4>
                    <span className={cx('singer')}>{currentSongPlay.artistsNames}</span>
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
                <div className={cx('timer')}>
                    <span className={cx('current-timer')}>{formatTime(currentTime)}</span>
                    <div className={cx('custom-progress')}>
                        <div ref={progressBarRef} className={cx('progress-bar')} style={{ width: '0px' }}></div>
                        <ReactPlayer
                            ref={audioRef}
                            width={0}
                            height={0}
                            config={{ file: { forceAudio: true } }}
                            playing={isPlaying}
                            onPlay={handlePlay}
                            onProgress={handleRunProgressBar}
                            url={`http://api.mp3.zing.vn/api/streaming/audio/${currentSongPlay.encodeId}/320`}
                        />
                    </div>
                    <span className={cx('total-timer')}>{currentSongPlay && formatTime(currentSongPlay.duration)}</span>
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
