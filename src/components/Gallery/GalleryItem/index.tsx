import classNames from 'classnames/bind';
import styles from '../Gallery.module.scss';

const cx = classNames.bind(styles);

function GalleryItem({ item }: any) {
    return (
        <div className={cx('gallery-col')}>
            <div className={cx('gallery-item')}>
                <div className={cx('image')}>
                    <img src={item.banner} alt="" />
                </div>
            </div>
        </div>
    );
}

export default GalleryItem;
