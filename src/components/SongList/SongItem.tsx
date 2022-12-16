import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongList.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SongItem() {
    return (
        <div className={cx('item')}>
            <div className={cx('item-wrapper')}>
                <span className={cx('order')}>01</span>
                <div className={cx('item-info')}>
                    <img className={cx('item-img')} src={images.defaultImg} alt="" />
                    <div className={cx('item-body')}>
                        <span className={cx('item-name')}>I Miss You</span>
                        <span className={cx('item-singer')}>Blink 182</span>
                    </div>
                </div>
            </div>
            <div className={cx('item-control')}>
                <span className={cx('timer')}>3:45</span>
                <span className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className={cx('like')}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
            </div>
        </div>
    );
}

export default SongItem;
