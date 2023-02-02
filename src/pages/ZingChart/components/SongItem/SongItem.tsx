import { Link } from 'react-router-dom';
import { Image } from 'antd';
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

const cx = classNames.bind(styles);

export type SongItemProps = {
    data?: SongQueueItemType;
    index?: number;
};

function SongItem({ data, index }: SongItemProps) {
    return (
        <div className={cx('wrapper')}>
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
                <div className={cx('song-thumb')}>
                    <Image
                        src={data?.thumbnail}
                        width={40}
                        style={{ borderRadius: '4px' }}
                        placeholder={<Image preview={false} src={data?.thumbnail} width={100} />}
                    />
                </div>
                <div className={cx('song-info')}>
                    <span className={cx('song-name')}>{data?.title}</span>
                    <h3 className={cx('singer')}>
                        {data?.artists.map((item: ArtistItemType, index: number) => {
                            let artistName = item.name || item.alias;
                            let comma: string | null = ', ';
                            if (index === data.artists.length - 1) {
                                comma = null;
                            }

                            return (
                                <>
                                    <Link key={index} to={`/nghe-si/${item.alias}`} className={cx('singer-link')}>
                                        {artistName}
                                        {item.spotlight && <StarOutlined className={cx('star')} />}
                                    </Link>
                                    {comma}
                                </>
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
                <div className={cx('toggle')}>
                    <PlayCircleOutlined className={cx('icon')} />
                </div>
                <div className={cx('time')}>
                    <span>{data?.duration && formatTime(data?.duration)}</span>
                </div>
                <div className={cx('more')}>
                    <EllipsisOutlined className={cx('icon')} />
                </div>
            </div>
        </div>
    );
}

export default SongItem;
