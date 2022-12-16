import classNames from 'classnames/bind';
import styles from '../Playlist.module.scss';

const cx = classNames.bind(styles);

function PlaylistItem() {
    return (
        <div className={cx('playlist-col')}>
            <div className={cx('playlist-item')}>
                <div className={cx('image')}>
                    <img src="https://i1.sndcdn.com/artworks-Bh9RlDtDd9q9tKbM-E9l4qw-t500x500.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default PlaylistItem;
