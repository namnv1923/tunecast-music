import { useCallback, useMemo } from 'react';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
import Livestream from '~/pages/Radio/components/Livestream';
import { getRadioData } from '~/apis/radio';
import Podcast from './components/Podcast';
import Swipper from './components/Swipper';
import Episode from '~/pages/Radio/components/Episode';

const cx = classNames.bind(styles);

function Radio() {
    const { data, isLoading } = getRadioData();
    const [api, contextHolder] = notification.useNotification();

    const listenData = useMemo(() => {
        if (data) {
            return data.find((item: any) => item.title === 'Đón nghe');
        }
    }, [data]);

    const programData = useMemo(() => {
        if (data) {
            return data.find((item: any) => item.sectionType === 'podcastH');
        }
    }, [data]);

    const episodeTrend = useMemo(() => {
        return data && data.find((item: any) => item.sectionId === 'radPromoteEpisode');
    }, [data]);

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
                    <>
                        <Livestream
                            data={data.find((item: any) => item.sectionType === 'livestream').items}
                            onOpenNotifi={openNotification}
                        />
                        <Podcast data={data.find((item: any) => item.sectionType === 'podcast')} />
                        <Swipper data={listenData} />
                        <Podcast data={data.find((item: any) => item.sectionType === 'podcast_category')} />
                        <Episode data={episodeTrend} />
                        <Swipper data={programData} type="program" />
                        <Podcast
                            type="custom-title"
                            data={data.find(
                                (item: any) =>
                                    item.sectionType === 'podcast' &&
                                    item.sectionId === 'radReplay' &&
                                    item.subTitle.id === 'IW7B7AEI',
                            )}
                        />
                        <Podcast
                            type="custom-title"
                            data={data.find(
                                (item: any) =>
                                    item.sectionType === 'podcast' &&
                                    item.sectionId === 'radReplay' &&
                                    item.subTitle.id === 'IW7ZE7UZ',
                            )}
                        />
                        <Podcast
                            type="custom-title"
                            data={data.find(
                                (item: any) =>
                                    item.sectionType === 'podcast' &&
                                    item.sectionId === 'radReplay' &&
                                    item.subTitle.id === 'IW7B9DEE',
                            )}
                        />
                        <Podcast
                            type="custom-title"
                            data={data.find(
                                (item: any) =>
                                    item.sectionType === 'podcast' &&
                                    item.sectionId === 'radReplay' &&
                                    item.title === 'Nghe lại',
                            )}
                        />
                        <Podcast
                            data={data.find(
                                (item: any) => item.sectionType === 'podcast' && item.sectionId === 'radLastestProgram',
                            )}
                        />
                    </>
                )}
            </div>
        </>
    );
}

export default Radio;
