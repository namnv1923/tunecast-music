import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type MenuItemType = {
    to: string;
    title?: string;
    icon?: JSX.Element;
    isLink?: boolean;
};

function MenuItem({ to, title, icon, isLink = true }: MenuItemType) {
    let Comp: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>> | string = NavLink;
    if (!isLink) {
        Comp = 'div';
    }

    return (
        <Comp
            to={to}
            className={
                isLink
                    ? (nav) =>
                          cx('menu-item', {
                              active: nav.isActive,
                          })
                    : cx('menu-item')
            }
        >
            <span className={cx({ icon: icon })}>{icon}</span>
            <span>{title}</span>
        </Comp>
    );
}

export default MenuItem;
