import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import routes from '~/config/routes';
import { HomeIcon, CategoryIcon, HeartIcon, PlusIcon, AlbumIcon, SettingIcon, LogoutIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className={cx('sidebar')}>
            <Link to="/" className={cx('logo')}>
                <img src={images.logo} alt="" />
            </Link>
            <Menu label="Menu">
                <div className={cx('menu')}>
                    <MenuItem to="/" title="Home" icon={<HomeIcon />} />
                    <MenuItem to="/categories" title="Categories" icon={<CategoryIcon />} />
                    <MenuItem to={routes.favourites} title="Favourites" icon={<HeartIcon />} />
                </div>
            </Menu>
            <Menu label="Playlist">
                <div className={cx('menu')}>
                    <MenuItem to={routes.create} title="Create New" icon={<PlusIcon />} />
                    <MenuItem to={routes.album} title="Pop Punk" icon={<AlbumIcon />} />
                </div>
            </Menu>
            <Menu label="General">
                <div className={cx('menu')}>
                    <MenuItem to={routes.settings} title="Settings" icon={<SettingIcon />} />
                    <MenuItem to={routes.logout} title="Log Out" icon={<LogoutIcon />} />
                </div>
            </Menu>
        </div>
    );
}

export default Sidebar;
