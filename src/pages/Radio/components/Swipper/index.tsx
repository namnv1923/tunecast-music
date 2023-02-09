import { useRef } from 'react';
import { Navigation, Swiper as SwiperType, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './Swiper.module.scss';
import Listen from './Listen';
import Program from './Program';

const cx = classNames.bind(styles);

type SwiperProps = {
    type?: 'program';
    data: any;
};

function Swipper({ type, data }: SwiperProps) {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>{data.title}</h3>
                <div className={cx('control')}>
                    <span className={cx('left')} onClick={() => swiperRef.current?.slidePrev()}>
                        <LeftOutlined />
                    </span>
                    <span className={cx('right')} onClick={() => swiperRef.current?.slideNext()}>
                        <RightOutlined />
                    </span>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        speed={800}
                        autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                        loopFillGroupWithBlank={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {data.items.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                {type === 'program' ? <Program data={item} /> : <Listen data={item} />}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Swipper;
