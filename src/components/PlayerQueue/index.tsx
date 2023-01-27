import { useState } from 'react';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis, faPause } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './PlayerQueue.module.scss';
import { ArtistItemType } from '~/components/ZingChart/components/TopZingChart';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { setIsPlaying } from '~/redux/slices/settingsSlice';
import { setCurrentSongPlay, pushRecentSongPlayList } from '~/redux/slices/songPlaySlice';
import formatReleaseDate from '~/utils/formatReleaseDate';
import { TagVIP } from '~/components/Icons';

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

function PlayerQueue({ item }: { item: SongQueueItemType }) {
    const dispatch = useAppDispatch();
    const [api, contextHolder] = notification.useNotification();
    const { isPlaying } = useAppSelector((state: any) => state.settings);
    const { currentSongPlay } = useAppSelector((state: any) => state.songPlay);

    const openNotification = (placement: NotificationPlacement) => {
        api.info({
            message: 'Dành Cho Tài Khoản VIP',
            description: 'Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để nghe bài hát này.',
            placement,
        });
    };

    const handlePlaySong = () => {
        if (item.streamingStatus === 2) {
            openNotification('top');
        } else if (item.streamingStatus === 1) {
            if (item.encodeId === currentSongPlay.encodeId) {
                if (isPlaying) {
                    dispatch(setIsPlaying(false));
                } else {
                    dispatch(setIsPlaying(true));
                    dispatch(setCurrentSongPlay(item));
                    dispatch(pushRecentSongPlayList(item));
                }
            } else {
                dispatch(setIsPlaying(true));
                dispatch(setCurrentSongPlay(item));
                dispatch(pushRecentSongPlayList(item));
            }
        }
    };

    return (
        <>
            {contextHolder}
            <div className={cx('wrapper', { active: currentSongPlay.encodeId === item.encodeId })}>
                <div className={cx('content')}>
                    <div className={cx('img')} onClick={handlePlaySong}>
                        <img src={item.thumbnail} alt="" />
                        <div className={cx('overlay')}>
                            <span>
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={isPlaying && currentSongPlay.encodeId === item.encodeId ? faPause : faPlay}
                                />
                            </span>
                        </div>
                    </div>
                    <div className={cx('info', { 'is-VIP': item.streamingStatus === 2 })}>
                        <p className={cx('name')}>
                            <span className={cx('name-song')}>{item.title}</span>
                            <TagVIP className={cx('tag')} />
                        </p>
                        <span className={cx('singer')}>{item.artistsNames}</span>
                        <span className={cx('time')}>{formatReleaseDate(item.releaseDate)}</span>
                    </div>
                </div>
                <span className={cx('more')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </span>
            </div>
        </>
    );
}

export default PlayerQueue;
