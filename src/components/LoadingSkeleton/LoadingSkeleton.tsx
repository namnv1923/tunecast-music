import classNames from 'classnames/bind';
import styles from './LoadingSkeleton.module.scss';

const cx = classNames.bind(styles);

type LoadingSkeletonType = {
    option?: string;
};

function LoadingSkeleton({ option = '' }: LoadingSkeletonType) {
    return (
        <div className={cx('skeleton', { [option]: option })}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('img')}>
                        <img src="" alt="" />
                        <div className={cx('overlay')}>
                            <span></span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('name')}>
                            <span className={cx('name-song')}></span>
                        </p>
                        <span className={cx('singer')}></span>
                        <span className={cx('time')}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingSkeleton;
