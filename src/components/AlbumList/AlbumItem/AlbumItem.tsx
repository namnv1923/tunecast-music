import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../AlbumList.module.scss';

const cx = classNames.bind(styles);

function AlbumItem({ albumItem }: any) {
    return (
        <div className="col l-2-4">
            <div className={cx('item')}>
                <div className={cx('wrapper-image')}>
                    <div className={cx('item-img')}>
                        <img className={cx('image')} src={albumItem.thumbnailM} alt="" />
                    </div>
                    <div className={cx('overlay')}>
                        <span className={cx('play')}>
                            <FontAwesomeIcon icon={faPlay} />
                        </span>
                    </div>
                </div>
                <h4 className={cx('name')}>
                    <Link to="/">{albumItem.title}</Link>
                </h4>
                <p className={cx('author')}>
                    {albumItem.artists &&
                        albumItem.artists.map((artist: any) => (
                            <span key={artist.id}>
                                <Link to={artist.link}>{artist.name}, </Link>
                            </span>
                        ))}
                </p>
            </div>
        </div>
    );
}

export default AlbumItem;
