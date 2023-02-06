import { useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { Image, message, Spin, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import {
    MinusOutlined,
    PlayCircleOutlined,
    PauseOutlined,
    EllipsisOutlined,
    HeartOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    StarOutlined,
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import { SongQueueItemType } from '~/components/PlayerQueue';
import formatTime from '~/utils/formatTime';
import { ArtistItemType } from '~/components/ZingChart/components/TopZingChart';
import { useAppSelector, useAppDispatch } from '~/app/hooks';
import { setIsPlaying, setLoading } from '~/redux/slices/settingsSongSlice';
import {
    setCurrentSongPlay,
    setCurrentIndex,
    pushRecentSongPlayList,
    fetchPlaylist,
} from '~/redux/slices/songPlaySlice';
import { TagVIP } from '~/components/Icons';

const cx = classNames.bind(styles);

export type SongItemProps = {
    data?: SongQueueItemType;
    index?: number;
    size?: string;
};

function SongItem({ data, index, size = '' }: SongItemProps) {
    const dispatch = useAppDispatch();
    const { isPlaying, loading } = useAppSelector((state: any) => state.settings);
    const { currentSongPlay } = useAppSelector((state: any) => state.songPlay);
    const [api, contextHolder] = notification.useNotification();

    const openNotification = useCallback(
        (placement: NotificationPlacement) => {
            api.info({
                message: 'Dành Cho Tài Khoản VIP',
                description: 'Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để nghe bài hát này.',
                placement,
            });
        },
        [api],
    );

    const handlePlaySong = useCallback(() => {
        dispatch(setLoading(true));
        if (data?.streamingStatus === 1) {
            if (data.encodeId === currentSongPlay.encodeId) {
                if (isPlaying) {
                    dispatch(setIsPlaying(false));
                } else {
                    dispatch(setIsPlaying(true));
                }
            } else {
                dispatch(setCurrentSongPlay(data));
                dispatch(setCurrentIndex(data));
                dispatch(pushRecentSongPlayList(data));
                dispatch(setIsPlaying(true));
            }
            dispatch(setLoading(false));
        } else {
            openNotification('top');
            dispatch(setLoading(false));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isPlaying, currentSongPlay?.encodeId, data]);

    return (
        <>
            {contextHolder}
            <div
                className={cx('wrapper', {
                    active: data?.encodeId === currentSongPlay.encodeId,
                    'is-VIP': data?.streamingStatus === 2,
                    [size]: size,
                })}
            >
                <div className={cx('left')}>
                    <div className={cx('song-prefix')}>
                        <div className={cx('rank')}>
                            <span>{index}</span>
                        </div>
                        <div className={cx('sort')}>
                            {data?.rakingStatus === 0 ? (
                                <MinusOutlined className={cx('icon')} />
                            ) : data && data?.rakingStatus > 0 ? (
                                <>
                                    <CaretUpOutlined className={cx('icon', 'up')} />
                                    <span>{data.rakingStatus}</span>
                                </>
                            ) : (
                                <>
                                    <CaretDownOutlined className={cx('icon', 'down')} />
                                    <span>{data?.rakingStatus && Math.abs(data?.rakingStatus)}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div
                        className={cx('song-thumb', {
                            active: data?.encodeId === currentSongPlay.encodeId && isPlaying,
                        })}
                    >
                        <Spin spinning={loading}>
                            <Image
                                src={data?.thumbnail}
                                width={40}
                                style={{ borderRadius: '4px' }}
                                placeholder={<Image preview={false} src={data?.thumbnail} width={100} />}
                            />
                            <div className={cx('overlay')}>
                                <div className={cx('icon-playing')}></div>
                            </div>
                        </Spin>
                    </div>
                    <div className={cx('song-info')}>
                        <p className={cx('song-name')}>
                            <span className={cx('name')}>{data?.title}</span>
                            <TagVIP className={cx('tag')} />
                        </p>
                        <h3 className={cx('singer')}>
                            {data?.artists.map((item: ArtistItemType, index: number) => {
                                let artistName = item.name || item.alias;
                                let comma: string | null = ', ';
                                if (index === data.artists.length - 1) {
                                    comma = null;
                                }

                                return (
                                    <span key={index}>
                                        <Link to={`/nghe-si/${item.alias}`} className={cx('singer-link')}>
                                            {artistName}
                                            {item.spotlight && <StarOutlined className={cx('star')} />}
                                        </Link>
                                        {comma}
                                    </span>
                                );
                            })}
                        </h3>
                    </div>
                </div>
                <div className={cx('center')}>
                    <p className={cx('album-name')}>{data?.album?.title}</p>
                </div>
                <div className={cx('right')}>
                    <div className={cx('like')}>
                        <HeartOutlined className={cx('icon')} />
                    </div>
                    <div className={cx('toggle')} onClick={handlePlaySong}>
                        {isPlaying && data?.encodeId === currentSongPlay.encodeId ? (
                            <PauseOutlined className={cx('icon')} />
                        ) : (
                            <PlayCircleOutlined className={cx('icon')} />
                        )}
                    </div>
                    <div className={cx('time')}>
                        <span>{data?.duration && formatTime(data?.duration)}</span>
                    </div>
                    <div className={cx('more')}>
                        <EllipsisOutlined className={cx('icon')} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(SongItem);
