import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { getGallery } from '~/apis/homeApi';
import Gallery from '~/components/Gallery';
import NewRelease from './components/NewRelease';
import AlbumList from '~/components/AlbumList';
import ZingChart from '~/components/ZingChart';
import WeekChart from './components/WeekChart';
import ArtistSpotlight from './components/ArtistSpotlight';

const cx = classNames.bind(styles);

function Home() {
    const { data, status } = getGallery();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery')}>{status === 'success' && <Gallery galleryList={data} />}</div>
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
        </div>
    );
}

export default Home;
