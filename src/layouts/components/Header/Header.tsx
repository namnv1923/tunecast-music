import { useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { SearchIcon } from '~/components/Icons';
// import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const changeCssHeader = () => {
            if (headerRef.current) {
                if (window.scrollY === 0) {
                    headerRef.current.style.borderBottom = 'none';
                    headerRef.current.style.backgroundColor = 'transparent';
                } else {
                    headerRef.current.style.borderBottom = '1px solid var(--border-color)';
                    headerRef.current.style.backgroundColor = 'var(--layout-bg)';
                }
            }
        };
        window.addEventListener('scroll', changeCssHeader);

        return () => window.removeEventListener('scroll', changeCssHeader);
    }, []);

    return (
        <div ref={headerRef} className={cx('wrapper')}>
            <div className={cx('search')}>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
                <input type="text" placeholder="Search" />
                <div className={cx('search-border')}></div>
            </div>
            {/* <div className={cx('info')}>
                <h5 className={cx('name')}>Nguyen Nam</h5>
                <div className={cx('image')}>
                    <img src={images.defaultImg} alt="" />
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div> */}
            <div className={cx('authentication')}>
                <Button className={cx('login')}>Login</Button>
                <Button className={cx('register')}>Register</Button>
            </div>
        </div>
    );
}

export default Header;
