import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeaderHome from '~/components/HeaderHome';
import Playlist from '~/components/Playlist';
import SongItem from '~/components/SongItem';
import TrendingListAuthor from '~/components/TrendingListAuthor';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <HeaderHome />
            <div className={cx('for-you')}>
                <h3 className={cx('title')}>For you</h3>
                <p className={cx('nav')}>
                    <span className={cx('new', 'active')}>new</span>
                    <span className={cx('playlists')}>playlists</span>
                    <span className={cx('episodes')}>episodes</span>
                </p>
                <Playlist />
            </div>
            <div className={cx('action')}>
                <div className={cx('listening')}>
                    <div className={cx('header')}>
                        <h3 className={cx('title')}>Continue listening</h3>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </div>
                    <SongItem />
                </div>
                <div className={cx('trending')}>
                    <div className={cx('header')}>
                        <h3 className={cx('title')}>Trending authors</h3>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </div>
                    <TrendingListAuthor />
                </div>
            </div>
            <div className={cx('trending-podcasts')}>
                <h3 className={cx('title')}>Trending podcasts</h3>
                <Playlist />
            </div>
        </div>
    );
}

export default Home;
