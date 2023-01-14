import classNames from 'classnames/bind';
import styles from '../../Home.module.scss';
import { getWeekChart } from '~/apis/homeApi';

const cx = classNames.bind(styles);

export type WeekChartType = {
    banner: string;
    cover: string;
    country: string;
    group: {
        id: string;
        name: string;
        type: string;
        link: string;
    }[];
};

function WeekChart() {
    const { data, status } = getWeekChart();
    console.log(data);
    return (
        <div className="grid">
            <div className="row">
                {status === 'success' &&
                    data.map((item: WeekChartType) => (
                        <div key={item.cover} className="col l-4">
                            <div className={cx('week-chart-item')}>
                                <img className={cx('image')} src={item.cover} alt="" />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default WeekChart;
