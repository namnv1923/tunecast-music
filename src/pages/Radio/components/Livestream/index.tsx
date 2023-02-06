import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from '../RadioComponents.module.scss';
import { PlayIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

type LivestreamProps = {
    data: any;
    onOpenNotifi: (placement: any) => void;
};

function Livestream({ data, onOpenNotifi }: LivestreamProps) {
    return (
        <div className={cx('livestream')}>
            <div className="grid">
                <div className="row">
                    {data.map((item: any, index: number) => {
                        if (index >= 7) {
                            return;
                        }
                        return (
                            <div key={index} className="col l-1-7">
                                <div className={cx('card')}>
                                    <div className={cx('top-card')}>
                                        <div className={cx('image')} onClick={() => onOpenNotifi('top')}>
                                            <img src={item?.program?.thumbnail || item?.thumbnail} alt="" />
                                            <div className={cx('overlay')}></div>
                                        </div>
                                        <div className={cx('host')}>
                                            <img src={item.host.thumbnail} alt="" />
                                        </div>
                                        <div className={cx('label')}>
                                            <img
                                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx('play-btn')} onClick={() => onOpenNotifi('top')}>
                                            <PlayIcon width="4.2rem" height="4.2rem" className={cx('icon')} />
                                        </div>
                                    </div>
                                    <div className={cx('bottom-card')}>
                                        <h3 className={cx('title')}>{item.host.name}</h3>
                                        <h3 className={cx('subtitle')}>{item.activeUsers} đang nghe</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default memo(Livestream);
