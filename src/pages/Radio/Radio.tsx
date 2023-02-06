import { useCallback } from 'react';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
import Livestream from '~/pages/Radio/components/Livestream';
import { getRadioData } from '~/apis/radio';
import Podcast from './components/Podcast';

const cx = classNames.bind(styles);

function Radio() {
    const { data, isLoading } = getRadioData();
    const [api, contextHolder] = notification.useNotification();
    console.log(data);

    const openNotification = useCallback(
        (placement: NotificationPlacement) => {
            api.info({
                message: `Radio đang phát triển, vui lòng thông cảm !`,
                placement,
            });
        },
        [api],
    );

    return (
        <>
            {contextHolder}
            <div className={cx('wrapper')}>
                <div className={cx('bg')}>
                    <div className={cx('bg-blur')}></div>
                    <div className={cx('bg-alpha')}></div>
                    <div className={cx('bg-alpha-1')}></div>
                </div>
                {!isLoading && (
                    <Livestream
                        data={data.find((item: any) => item.sectionType === 'livestream').items}
                        onOpenNotifi={openNotification}
                    />
                )}
                {!isLoading && <Podcast data={data.find((item: any) => item.sectionType === 'podcast')} />}
                {!isLoading && <Podcast data={data.find((item: any) => item.sectionType === 'podcast_category')} />}
                {!isLoading && (
                    <Podcast
                        type="custom-title"
                        data={data.find(
                            (item: any) =>
                                item.sectionType === 'podcast' &&
                                item.sectionId === 'radReplay' &&
                                item.subTitle.id === 'IW7B7AEI',
                        )}
                    />
                )}
                {!isLoading && (
                    <Podcast
                        type="custom-title"
                        data={data.find(
                            (item: any) =>
                                item.sectionType === 'podcast' &&
                                item.sectionId === 'radReplay' &&
                                item.subTitle.id === 'IW7ZE7UZ',
                        )}
                    />
                )}
                {!isLoading && (
                    <Podcast
                        type="custom-title"
                        data={data.find(
                            (item: any) =>
                                item.sectionType === 'podcast' &&
                                item.sectionId === 'radReplay' &&
                                item.subTitle.id === 'IW7B9DEE',
                        )}
                    />
                )}
                {!isLoading && (
                    <Podcast
                        type="custom-title"
                        data={data.find(
                            (item: any) =>
                                item.sectionType === 'podcast' &&
                                item.sectionId === 'radReplay' &&
                                item.title === 'Nghe lại',
                        )}
                    />
                )}
                {!isLoading && (
                    <Podcast
                        data={data.find(
                            (item: any) => item.sectionType === 'podcast' && item.sectionId === 'radLastestProgram',
                        )}
                    />
                )}
            </div>
        </>
    );
}

export default Radio;
