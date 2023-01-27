import classNames from 'classnames/bind';
import styles from './PlayListContinue.module.scss';
import PlayItemContinue from './PlayItemContinue/PlayItemContinue';

const cx = classNames.bind(styles);

function PlayListContinue() {
    return (
        <div className={cx('wrapper')}>
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
            <PlayItemContinue />
        </div>
    );
}

export default PlayListContinue;
