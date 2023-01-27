import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Top100.module.scss';
import { getTop100 } from '~/apis/homeApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AlbumItem from '~/components/AlbumList/AlbumItem';

const cx = classNames.bind(styles);

function Top100({ title }: { title: string }) {
    const { data, status } = getTop100('h100');
    const [top100, setTop100] = useState([]);

    useEffect(() => {
        if (status === 'success') {
            setTop100(data.splice(0, 5));
        }
    }, [status, data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <h4 className={cx('title')}>{title}</h4>
                <Link to="/top100" className={cx('see-all')}>
                    <span>Tất cả</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </Link>
            </div>
            <div className={cx('content')}>
                <div className="grid">
                    <div className="row">
                        {top100 &&
                            top100.map((albumItem: any, index: number) => (
                                <AlbumItem key={index} albumItem={albumItem} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top100;
