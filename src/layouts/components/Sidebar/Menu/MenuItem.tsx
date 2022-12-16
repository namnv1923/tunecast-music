import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type MenuItemType = {
    to: string;
    title: string;
    icon: JSX.Element;
};

function MenuItem({ to, title, icon }: MenuItemType) {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
        >
            {icon}
            <span>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
