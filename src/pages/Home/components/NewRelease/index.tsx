import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Home.module.scss';
import PlayerQueue from '~/components/PlayerQueue';
import { getNewRelease } from '~/apis/homeApi';

const cx = classNames.bind(styles);

function NewRelease() {
    const { data, status } = getNewRelease();
    const vPopList = useRef([]);
    const otherList = useRef([]);
    const [isVietNam, setIsVietNam] = useState(true);

    useEffect(() => {
        if (status === 'success') {
            vPopList.current = data.vPop.splice(0, 12);
            otherList.current = data.others.splice(0, 12);
        }
    }, [status, data]);

    return (
        <div className={cx('new-release')}>
            <h2>Mới Phát Hành</h2>
            <div className={cx('country')}>
                <button onClick={() => setIsVietNam(true)} className={cx('viet-nam', { active: isVietNam })}>
                    Viet Nam
                </button>
                <button onClick={() => setIsVietNam(false)} className={cx('international', { active: !isVietNam })}>
                    International
                </button>
            </div>
            <div className={cx('playlist')}>
                <div className="grid">
                    <div className="row">
                        {isVietNam
                            ? vPopList.current &&
                              vPopList.current.map((item: any, index: number) => (
                                  <div key={index} className="col l-4">
                                      <PlayerQueue item={item} />
                                  </div>
                              ))
                            : otherList.current &&
                              otherList.current.map((item: any, index: number) => (
                                  <div key={index} className="col l-4">
                                      <PlayerQueue item={item} />
                                  </div>
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewRelease;
