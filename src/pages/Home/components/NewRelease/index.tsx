import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Home.module.scss';
import { getNewRelease } from '~/apis/homeApi';
import PlayerQueue from '~/components/PlayerQueue';
import { SongQueueItemType } from '~/components/PlayerQueue';
import LoadingSkeleton from '~/components/LoadingSkeleton';

const cx = classNames.bind(styles);

function NewRelease() {
    const { data, status } = getNewRelease();
    const [vPopList, setVPopList] = useState([]);
    const [otherList, setOtherList] = useState([]);
    const [isVietNam, setIsVietNam] = useState(true);

    useEffect(() => {
        if (status === 'success') {
            setVPopList(data.vPop);
            setOtherList(data.others);
        }
    }, [data, status]);

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
                        {status === 'success'
                            ? isVietNam
                                ? vPopList &&
                                  vPopList.map((item: SongQueueItemType, index: number) => {
                                      if (index > 11) {
                                          return;
                                      } else {
                                          return (
                                              <div key={index} className="col l-4">
                                                  <PlayerQueue item={item} />
                                              </div>
                                          );
                                      }
                                  })
                                : otherList &&
                                  otherList.map((item: SongQueueItemType, index: number) => {
                                      if (index > 11) {
                                          return;
                                      } else {
                                          return (
                                              <div key={index} className="col l-4">
                                                  <PlayerQueue item={item} />
                                              </div>
                                          );
                                      }
                                  })
                            : Array(12)
                                  .fill(0)
                                  .map((item: any, index: number) => (
                                      <div key={index} className="col l-4">
                                          <LoadingSkeleton option="player-queue" />
                                      </div>
                                  ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewRelease;
