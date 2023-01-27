import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Gallery from '~/components/Gallery';
import NewRelease from './components/NewRelease';
import AlbumList from '~/components/AlbumList';
import ZingChart from '~/components/ZingChart';
import WeekChart from './components/WeekChart';
import ArtistSpotlight from './components/ArtistSpotlight';
import Top100 from '~/components/Top100';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery')}>
                <Gallery />
            </div>
            <div className={cx('new-release')}>
                <NewRelease />
            </div>
            <div className={cx('new-song')}>
                <AlbumList label="Nhạc Mới Mỗi Ngày" />
            </div>
            <div className={cx('zing-chart')}>
                <ZingChart />
            </div>
            <div className={cx('week-chart')}>
                <WeekChart />
            </div>
            <div className={cx('artist-spotlight')}>
                <ArtistSpotlight />
            </div>
            <div className={cx('top-100')}>
                <Top100 title="Top 100" />
            </div>
        </div>
    );
}

export default Home;
