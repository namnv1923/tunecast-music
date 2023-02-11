import classNames from 'classnames/bind';
import styles from '../Swiper.module.scss';

const cx = classNames.bind(styles);

type ListenProps = {
    data: any;
};

function Listen({ data }: ListenProps) {
    return (
        <div className={cx('item')}>
            <img className={cx('img')} src={data?.thumbnail} alt="" />
        </div>
    );
}

export default Listen;
