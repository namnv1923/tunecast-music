import { useRef } from 'react';
import { Navigation, Swiper as SwiperType, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.scss';
import { getGallery } from '~/apis/homeApi';
import LoadingSkeleton from '~/components/LoadingSkeleton';

const cx = classNames.bind(styles);

function Gallery() {
    const { data, status } = getGallery();
    const swiperRef = useRef<SwiperType>();

    return (
        <div className={cx('gallery')}>
            <div className={cx('gallery-wrapper')}>
                <div className={cx('gallery-container')}>
                    <Swiper
                        slidesPerView={3}
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
                        {status === 'success'
                            ? data &&
                              data.map((galleryItem: any, index: number) => (
                                  <SwiperSlide key={index}>
                                      <GalleryItem key={index} item={galleryItem} />
                                  </SwiperSlide>
                              ))
                            : Array(2)
                                  .fill(0)
                                  .map((item: any, index: number) => (
                                      <SwiperSlide key={index}>
                                          <LoadingSkeleton key={index} option="image" />
                                      </SwiperSlide>
                                  ))}
                    </Swiper>
                    <div onClick={() => swiperRef.current?.slidePrev()} className={cx('gallery-left')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div onClick={() => swiperRef.current?.slideNext()} className={cx('gallery-right')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
