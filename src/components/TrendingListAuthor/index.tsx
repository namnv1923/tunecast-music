import classNames from 'classnames/bind';
import styles from './TrendingListAuthor.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function TrendingListAuthor() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <img className={cx('image')} src={images.defaultImg} alt="" />
                <span className={cx('singer')}>Helen Mile</span>
            </div>
            <div className={cx('item')}>
                <img className={cx('image')} src={images.defaultImg} alt="" />
                <span className={cx('singer')}>Helen Mile</span>
            </div>
            <div className={cx('item')}>
                <img className={cx('image')} src={images.defaultImg} alt="" />
                <span className={cx('singer')}>Helen Mile</span>
            </div>
        </div>
    );
}

export default TrendingListAuthor;
