import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { message, Slider } from 'antd';
import { HeartOutlined, PlusCircleOutlined, SoundOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackwardStep, faPause, faForwardStep, faRepeat, faPlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongPlaying.module.scss';
import images from '~/assets/images';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { setCurrentTime, setNextSongPlay, setBackSongPlay } from '~/redux/slices/songPlaySlice';
import { setIsPlaying, setIsMute, setVolumeValue } from '~/redux/slices/settingsSongSlice';
import formatTime from '~/utils/formatTime';
import { VolumeMuteIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SongPlaying() {
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const audioRef = useRef<ReactPlayer>(null);
    const [volumePercent, setVolumePercent] = useState<number>(0.5);
    const [currentValueSong, setCurrentValueSong] = useState<number>(0);

    const { isPlaying, isMute, volumeValue } = useAppSelector((state: any) => state.settings);
    const { currentTime, currentSongPlay, currentIndex, songPlaylist } = useAppSelector((state: any) => state.songPlay);

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Loading song error player. Try again!',
        });
    };

    const handleRunProgressBar = useCallback(() => {
        if (audioRef.current) {
            const value =
                (Math.floor(audioRef.current?.getCurrentTime()) / Math.floor(audioRef.current?.getDuration())) * 1000;
            setCurrentValueSong(value);
            dispatch(setCurrentTime(Math.floor(audioRef.current?.getCurrentTime())));
        }
    }, [dispatch]);

    const handleSeekSong = useCallback((value: number) => {
        setCurrentValueSong(value);
        audioRef.current?.seekTo(value / 1000, 'fraction');
    }, []);

    const handleChangeVolume = useCallback(
        (e: any) => {
            const value = e.currentTarget.value / 100;
            dispatch(setVolumeValue(value * 100));
            setVolumePercent(value);
        },
        [dispatch],
    );

    const handleNextSong = useCallback(() => {
        dispatch(setNextSongPlay());
    }, [dispatch]);

    const handleBackSong = useCallback(() => {
        dispatch(setBackSongPlay());
    }, [dispatch]);

    return (
        <>
            {contextHolder}
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
                        <span className={cx('back', { disable: currentIndex === 0 })} onClick={handleBackSong}>
                            <FontAwesomeIcon icon={faBackwardStep} />
                        </span>
                        <span
                            className={cx('play')}
                            onClick={() => (isPlaying ? dispatch(setIsPlaying(false)) : dispatch(setIsPlaying(true)))}
                        >
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </span>
                        <span
                            className={cx('next', { disable: currentIndex >= songPlaylist.length - 1 })}
                            onClick={handleNextSong}
                        >
                            <FontAwesomeIcon icon={faForwardStep} />
                        </span>
                        <span className={cx('repeat')}>
                            <FontAwesomeIcon icon={faRepeat} />
                        </span>
                    </div>
                    <div className={cx('timer')}>
                        <span className={cx('current-timer')}>{formatTime(currentTime)}</span>
                        <div className={cx('progress')}>
                            <Slider
                                className={cx('progress-bar')}
                                min={0}
                                max={1000}
                                value={currentValueSong}
                                onChange={handleSeekSong}
                            />
                            <ReactPlayer
                                ref={audioRef}
                                width={0}
                                height={0}
                                config={{ file: { forceAudio: true } }}
                                playing={isPlaying}
                                muted={isMute}
                                volume={volumePercent}
                                onProgress={handleRunProgressBar}
                                onError={() => error()}
                                url={`http://api.mp3.zing.vn/api/streaming/audio/${currentSongPlay.encodeId}/320`}
                            />
                        </div>
                        <span className={cx('total-timer')}>
                            {currentSongPlay && formatTime(currentSongPlay.duration)}
                        </span>
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
        </>
    );
}

export default SongPlaying;
