import classNames from 'classnames/bind';
import styles from './Episode.module.scss';
import EpisodeItem from './EpisodeItem';

const cx = classNames.bind(styles);

type EpisodeProps = {
    data: any;
};

function Episode({ data }: EpisodeProps) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>{data.title}</h3>
            <div className="gird">
                <div className="row">
                    {data.items.map((item: any, index: number) => {
                        if (index >= 6) return;
                        return (
                            <div key={index} className="col l-6">
                                <EpisodeItem data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Episode;
