import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongList.module.scss';
import images from '~/assets/images';
import { SongQueueItemType } from '~/components/PlayerQueue';
import formatTime from '~/utils/formatTime';
import { setIsPlaying } from '~/redux/slices/settingsSlice';
import { setCurrentSongPlay, pushRecentSongPlayList } from '~/redux/slices/songPlaySlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';

const cx = classNames.bind(styles);

function SongItem({ item, index }: { item: SongQueueItemType; index: number }) {
    const dispatch = useAppDispatch();
    const { isPlaying } = useAppSelector((state: any) => state.settings);
    const { currentSongPlay } = useAppSelector((state: any) => state.songPlay);

    const handlePlaySong = () => {
        if (isPlaying && item.encodeId === currentSongPlay.encodeId) {
            dispatch(setIsPlaying(false));
        } else if (isPlaying && item.encodeId !== currentSongPlay.encodeId) {
            dispatch(setIsPlaying(true));
        } else {
            dispatch(setIsPlaying(true));
        }
        dispatch(setCurrentSongPlay(item));
        dispatch(pushRecentSongPlayList(item));
    };

    return (
        <div className={cx('item', { active: item.encodeId === currentSongPlay.encodeId })}>
            <div className={cx('item-wrapper')}>
                <span className={cx('order')}>{index + 1}</span>
                <div className={cx('item-info')}>
                    <img className={cx('item-img')} src={item.thumbnail || images.defaultImg} alt="" />
                    <div className={cx('item-body')}>
                        <span className={cx('item-name')}>{item.title}</span>
                        <span className={cx('item-singer')}>{item.artistsNames}</span>
                    </div>
                </div>
            </div>
            <div className={cx('item-control')}>
                <span className={cx('timer')}>{formatTime(item.duration)}</span>
                <span className={cx('play')} onClick={handlePlaySong}>
                    <FontAwesomeIcon
                        icon={isPlaying && item.encodeId === currentSongPlay.encodeId ? faPause : faPlay}
                    />
                </span>
                <span className={cx('like')}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
            </div>
        </div>
    );
}

export default SongItem;
