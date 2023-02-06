import classNames from 'classnames/bind';
import styles from '../RadioComponents.module.scss';

const cx = classNames.bind(styles);

type PodcastProps = {
    type?: string;
    data: any;
};

function Podcast({ type = '', data }: PodcastProps) {
    return (
        <div className={cx('podcast', { [type]: type })}>
            {type && (
                <div className={cx('header')}>
                    <div className={cx('image')}>
                        <img src={data.subTitle.thumbnail} alt="" />
                    </div>
                    <div className={cx('heading')}>
                        <h3 className={cx('subtitle')}>{data.title}</h3>
                        <h3 className={cx('heading-title')}>
                            <span>{data.subTitle.name}</span>
                        </h3>
                    </div>
                </div>
            )}
            <h3 className={cx('title')}>{data.title}</h3>
            <div className={cx('podcast-list')}>
                <div className="grid">
                    <div className="row">
                        {data.items.map((item: any, index: number) => {
                            if (index >= 5) return;
                            return (
                                <div key={index} className="col l-2-4">
                                    <div className={cx('podcast-item')}>
                                        <div className={cx('image')}>
                                            <img src={item.thumbnailM || item.thumbnail} alt="" />
                                        </div>
                                        <div className={cx('content')}>
                                            <h4 className={cx('content-title')}>
                                                <span>{item.title}</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Podcast;
