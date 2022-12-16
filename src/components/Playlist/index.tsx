import classNames from 'classnames/bind';
import PlaylistItem from './PlaylistItem';
import styles from './Playlist.module.scss';

const cx = classNames.bind(styles);

function Playlist() {
    return (
        <div className={cx('playlist')}>
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
        </div>
    );
}

export default Playlist;
