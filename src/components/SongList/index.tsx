import classNames from 'classnames/bind';
import styles from './SongList.module.scss';
import SongItem from './SongItem';

const cx = classNames.bind(styles);

type SongListType = {
    label: string;
};

function SongList({ label }: SongListType) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h4>{label}</h4>
                <span>See all</span>
            </header>
            <SongItem />
            <SongItem />
            <SongItem />
        </div>
    );
}

export default SongList;
