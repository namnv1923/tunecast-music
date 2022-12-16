import classNames from 'classnames/bind';
import styles from './AlbumList.module.scss';
import AlbumItem from './AlbumItem';

const cx = classNames.bind(styles);

type AlbumListType = {
    label: string;
};

function AlbumList({ label }: AlbumListType) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h4>{label}</h4>
                <span>See all</span>
            </header>
            <div className={cx('content')}>
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
            </div>
        </div>
    );
}

export default AlbumList;
