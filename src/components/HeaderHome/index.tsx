import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './HeaderHome.module.scss';
import { SearchIcon } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeaderHome() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('control')}>
                <FontAwesomeIcon className={cx('back')} icon={faChevronLeft} />
                <FontAwesomeIcon className={cx('next')} icon={faChevronRight} />
            </div>
            <div className={cx('search')}>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
                <input type="text" placeholder="Search" />
                <div className={cx('search-border')}></div>
            </div>
            <div className={cx('info')}>
                <h5 className={cx('name')}>Nguyen Nam</h5>
                <div className={cx('image')}>
                    <img src={images.defaultImg} alt="" />
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;
