import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './ZingChart.module.scss';
import TopZingChart from './components/TopZingChart';
import ChartContent from './components/ChartContent';
import { getZingChart } from '~/apis/homeApi';

const cx = classNames.bind(styles);

function ZingChart() {
    const { data, status } = getZingChart();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className="grid">
                        <div className="row">
                            <div className="col l-5">
                                <header className={cx('head')}>
                                    <Link to="/">#zingchart</Link>
                                    <span className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCirclePlay} />
                                    </span>
                                </header>
                                {data && <TopZingChart topZingCharts={data.items} />}
                            </div>
                            <div className="col l-7">
                                <div className={cx('zing-chart')}>{data && <ChartContent data={data} />}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZingChart;
