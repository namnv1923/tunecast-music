import React, { useCallback, useRef, useState, Fragment } from 'react';
import ReactPlayer from 'react-player/lazy';
import { HeartOutlined, PlusCircleOutlined, SoundOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackwardStep, faPause, faForwardStep, faRepeat, faPlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongPlaying.module.scss';
import images from '~/assets/images';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { setCurrentTime } from '~/redux/slices/songPlaySlice';
import { setIsPlaying, setIsMute, setVolumeValue } from '~/redux/slices/settingsSongSlice';
import formatTime from '~/utils/formatTime';
import { VolumeMuteIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SongPlaying() {
    const dispatch = useAppDispatch();
    const audioRef = useRef<ReactPlayer>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [volumePercent, setVolumePercent] = useState<number>(0.5);

    const { isPlaying, isMute, volumeValue } = useAppSelector((state: any) => state.settings);
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

    const handleChangeVolume = useCallback(
        (e: any) => {
            const value = e.currentTarget.value / 100;
            dispatch(setVolumeValue(value * 100));
            setVolumePercent(value);
        },
        [dispatch],
    );

    const handleSeekSong = useCallback((e: any) => {
        console.log(e.target.offsetWidth);
    }, []);

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
                    <div className={cx('custom-progress')} onClick={handleSeekSong}>
                        <div ref={progressBarRef} className={cx('progress-bar')} style={{ width: '0px' }}></div>
                        <ReactPlayer
                            ref={audioRef}
                            width={0}
                            height={0}
                            config={{ file: { forceAudio: true } }}
                            playing={isPlaying}
                            muted={isMute}
                            volume={volumePercent}
                            onPlay={handlePlay}
                            onProgress={handleRunProgressBar}
                            url={`http://api.mp3.zing.vn/api/streaming/audio/${currentSongPlay.encodeId}/320`}
                        />
                    </div>
                    <span className={cx('total-timer')}>{currentSongPlay && formatTime(currentSongPlay.duration)}</span>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('right-left')}>
                    <span className="heart">
                        <HeartOutlined />
                    </span>
                    <span className="add">
                        <PlusCircleOutlined />
                    </span>
                    <span className={cx('volume')}>
                        <span className={cx('toggle')} onClick={() => dispatch(setIsMute(!isMute))}>
                            {isMute ? <VolumeMuteIcon className={cx('mute')} /> : <SoundOutlined />}
                        </span>
                        <input
                            className={cx('input')}
                            name="volume"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={volumeValue}
                            onChange={handleChangeVolume}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SongPlaying;
