import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis, faPause } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './PlayItemContinue.module.scss';
import { ArtistItemType } from '~/components/ZingChart/components/TopZingChart';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { setIsPlaying } from '~/redux/slices/settingsSongSlice';
import { setCurrentSongPlay, pushRecentSongPlayList } from '~/redux/slices/songPlaySlice';
import formatReleaseDate from '~/utils/formatReleaseDate';

const cx = classNames.bind(styles);

export type SongQueueItemType = {
    alias: string;
    artists: ArtistItemType[];
    artistsNames: string;
    duration: number;
    encodeId: string;
    genreIds: string[];
    hasLyric: boolean;
    releaseDate: number;
    streamingStatus: number;
    thumbnail: string;
    thumbnailM: string;
    title: string;
    zingChoice: boolean;
};

function PlayItemContinue() {
    // { item }: { item: SongQueueItemType }
    // const dispatch = useAppDispatch();
    // const { isPlaying } = useAppSelector((state: any) => state.settings);
    // const { currentSongPlay } = useAppSelector((state: any) => state.songPlay);

    // const handlePlaySong = () => {
    //     if (isPlaying && item.encodeId === currentSongPlay.encodeId) {
    //         dispatch(setIsPlaying(false));
    //     } else if (isPlaying && item.encodeId !== currentSongPlay.encodeId) {
    //         dispatch(setIsPlaying(true));
    //     } else {
    //         dispatch(setIsPlaying(true));
    //     }
    //     dispatch(setCurrentSongPlay(item));
    //     dispatch(pushRecentSongPlayList(item));
    // };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img')}>
                    <img
                        src="	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/f/f/6/3ff68ba14aaacbaa3177f1919c9fce60.jpg"
                        alt=""
                    />
                    <div className={cx('overlay')}>
                        <span>
                            <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        </span>
                    </div>
                </div>
                <div className={cx('info')}>
                    <span className={cx('music')}>Chơi Banh Tết</span>
                    <span className={cx('singer')}>QNT, Fanny</span>
                </div>
            </div>
            <div className={cx('control')}>
                <span className={cx('favourite')}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className={cx('more')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </span>
            </div>
        </div>
    );
}

export default PlayItemContinue;
