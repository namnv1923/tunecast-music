import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AlbumList.module.scss';

const cx = classNames.bind(styles);

function AlbumItem() {
    return (
        <div className={cx('item')}>
            <div className={cx('item-img')}>
                <img
                    className={cx('image')}
                    src="https://i1.sndcdn.com/artworks-Bh9RlDtDd9q9tKbM-E9l4qw-t500x500.jpg"
                    alt=""
                />
                <span className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </span>
            </div>
            <h4 className={cx('name')}>Told You So</h4>
            <p className={cx('author')}>Paramore</p>
        </div>
    );
}

export default AlbumItem;
