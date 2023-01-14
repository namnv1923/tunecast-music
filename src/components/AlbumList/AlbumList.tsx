import classNames from 'classnames/bind';
import styles from './AlbumList.module.scss';
import AlbumItem from './AlbumItem/AlbumItem';
import { getNewAlbum } from '~/apis/homeApi';

const cx = classNames.bind(styles);

type AlbumListType = {
    label: string;
};

function AlbumList({ label }: AlbumListType) {
    const { data, status } = getNewAlbum('hAutoTheme2');

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>{label}</h4>
            <div className={cx('content')}>
                <div className="grid">
                    <div className="row">
                        {data &&
                            data.map((albumItem: any, index: number) => (
                                <AlbumItem key={index} albumItem={albumItem} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumList;
