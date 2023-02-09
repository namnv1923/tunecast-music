import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Episode.module.scss';
import formatDate from '~/utils/formarDate';

const cx = classNames.bind(styles);

type EpisodeItemProps = {
    data: any;
};

function EpisodeItem({ data }: EpisodeItemProps) {
    return (
        <div className={cx('item')}>
            <img src={data.thumbnailM || data.thumbnail} alt="" />
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <p className={cx('title')}>{data.title}</p>
                    <span className={cx('subtitle')}>{data.album.title}</span>
                    <h3 className={cx('timer')}>
                        {`${formatDate(data.releaseDate)} • `}
                        <span>23 phút</span>
                    </h3>
                </div>
                <span className={cx('more')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </span>
            </div>
        </div>
    );
}

export default EpisodeItem;
