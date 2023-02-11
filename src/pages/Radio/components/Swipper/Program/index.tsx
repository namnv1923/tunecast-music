import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from '../Swiper.module.scss';

const cx = classNames.bind(styles);

type ProgramProps = {
    data: any;
};

function Program({ data }: ProgramProps) {
    const coverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (coverRef.current) {
            coverRef.current.style.backgroundImage = `url(${data.thumbnailM || data.thumbnail})`;
        }
    }, [data?.thumbnailM, data?.thumbnail]);

    return (
        <div className={cx('program')}>
            <div ref={coverRef} className={cx('cover')}>
                <div className={cx('opacity')}></div>
            </div>
            <div className={cx('program-thumbnail')}>
                <img src={data?.thumbnailM || data?.thumbnail} alt="" />
            </div>
            <div className={cx('program-content')}>
                <p className={cx('host')}>{data?.artists[0].name}</p>
                <h3 className={cx('program-title')}>{data?.title}</h3>
                <h3 className={cx('program-subtitle')}>{data?.description}</h3>
            </div>
        </div>
    );
}

export default Program;
