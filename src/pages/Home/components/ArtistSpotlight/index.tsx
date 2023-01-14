import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Swiper as SwiperType, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../../Home.module.scss';
import { artistListHomePage } from '~/data/artistListHomePage';

const cx = classNames.bind(styles);

function ArtistSpotlight() {
    const swiperRef = useRef<SwiperType>();
    return (
        <div className={cx('artist-list')}>
            <Swiper
                slidesPerView={7}
                spaceBetween={30}
                slidesPerGroup={6}
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
                {artistListHomePage.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="">
                            <div className={cx('artist-item')}>
                                <Link className={cx('artist-item-link')} to="/">
                                    <img src={item.img} alt="" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={() => swiperRef.current?.slidePrev()} className={cx('artist-list-left')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div onClick={() => swiperRef.current?.slideNext()} className={cx('artist-list-right')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
}

export default ArtistSpotlight;
