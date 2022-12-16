import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import SongPlaying from '~/layouts/components/SongPlaying';

const cx = classNames.bind(styles);

type DefaultLayoutType = {
    children: JSX.Element;
};

function DefaultLayout({ children }: DefaultLayoutType) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
            <SongPlaying />
        </div>
    );
}

export default DefaultLayout;
