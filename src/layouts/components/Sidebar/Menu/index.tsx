import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type MenuType = {
    children: JSX.Element;
    label?: string;
};

function Menu({ label, children }: MenuType) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx({ label: label })}>{label}</span>
            {children}
        </div>
    );
}

export default Menu;
