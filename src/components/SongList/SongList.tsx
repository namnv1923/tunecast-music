import classNames from 'classnames/bind';
import styles from './SongList.module.scss';
import SongItem from './SongItem';
import { useAppSelector } from '~/app/hooks';
import { SongQueueItemType } from '~/components/PlayerQueue';

const cx = classNames.bind(styles);

type SongListType = {
    label: string;
};

function SongList({ label }: SongListType) {
    const { recentSongPlayList } = useAppSelector((state: any) => state.songPlay);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h4>{label}</h4>
            </header>
            {recentSongPlayList &&
                recentSongPlayList.map((item: SongQueueItemType, index: number) => (
                    <SongItem key={index} item={item} index={index} />
                ))}
        </div>
    );
}

export default SongList;
