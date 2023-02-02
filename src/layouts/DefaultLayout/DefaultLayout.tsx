import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import SongPlaying from '~/layouts/components/SongPlaying';
import Queue from '~/layouts/components/Queue';
import Header from '~/layouts/components/Header';

const cx = classNames.bind(styles);

type DefaultLayoutType = {
    children: JSX.Element;
};

function DefaultLayout({ children }: DefaultLayoutType) {
    const location = useLocation();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>
                    <div className={cx('search-info')}>
                        <Header />
                    </div>
                    <div className={cx('body')}>{children}</div>
                </div>
                {/* <div className={cx('queue')}>
                    <Queue />
                </div> */}
            </div>
            <SongPlaying />
        </div>
    );
}

export default DefaultLayout;
