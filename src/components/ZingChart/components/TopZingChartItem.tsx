import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TopZingChart.module.scss';
import { TopChartType } from './TopZingChart';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { setIsPlaying } from '~/redux/slices/settingsSlice';
import { setCurrentSongPlay, pushRecentSongPlayList } from '~/redux/slices/songPlaySlice';

const cx = classNames.bind(styles);

function TopZingChartItem({ index, data, allScore }: { index: number; data: TopChartType; allScore: number }) {
    const dispatch = useAppDispatch();
    const { isPlaying } = useAppSelector((state: any) => state.settings);
    const { currentSongPlay } = useAppSelector((state: any) => state.songPlay);

    const handlePlaySong = () => {
        if (isPlaying && data.encodeId === currentSongPlay.encodeId) {
            dispatch(setIsPlaying(false));
        } else if (isPlaying && data.encodeId !== currentSongPlay.encodeId) {
            dispatch(setIsPlaying(true));
        } else {
            dispatch(setIsPlaying(true));
        }
        dispatch(setCurrentSongPlay(data));
        dispatch(pushRecentSongPlayList(data));
    };

    return (
        <div className={cx('item', { active: currentSongPlay.encodeId === data.encodeId })}>
            <div className={cx('left')}>
                <span className={cx('level')}>{index}</span>
                <div className={cx('wrap-image')} onClick={handlePlaySong}>
                    <img src={data.thumbnailM} alt={data.artistsNames} />
                    <div className={cx('overlay')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon
                                icon={isPlaying && currentSongPlay.encodeId === data.encodeId ? faPause : faPlay}
                            />
                        </span>
                    </div>
                </div>
                <div className={cx('info')}>
                    <span className={cx('name')}>{data.title}</span>
                    <span className={cx('singer')}>
                        <Link to={`/nghe-si/${data.artists[0].alias}`}>{data.artistsNames}</Link>
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
