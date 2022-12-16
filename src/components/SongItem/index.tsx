import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SongItem() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.defaultImg} alt="" />
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <p className={cx('name')}>Episode 1: How to feel yourself</p>
                    <span className={cx('singer')}>Love kit</span>
                    <div className={cx('control')}>
                        <span className={cx('label')}>12 min out of 32</span>
                        <span className={cx('play')}>
                            <FontAwesomeIcon icon={faPlay} />
                        </span>
                    </div>
                </div>
                <span className={cx('more')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </span>
                <input className={cx('input')} type="range" min="0" max="1000" />
            </div>
        </div>
    );
}

export default SongItem;
