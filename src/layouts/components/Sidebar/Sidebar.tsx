import { Link, useNavigate } from 'react-router-dom';
import { Switch } from 'antd';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import routes from '~/config/routes';
import {
    LogoIcon,
    HeartIcon,
    PlaylistsIcon,
    TracksIcon,
    LogoutIcon,
    ZingchartIcon,
    RadioIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className={cx('sidebar')}>
            <Link to={routes.home} className={cx('logo')}>
                <LogoIcon className={cx('icon')} width="3.2rem" height="3.2rem" />
                <span className={cx('title')}>Tunecast</span>
            </Link>
            <Menu>
                <div className={cx('menu')}>
                    <MenuItem to={routes.home} title="Discover" icon={<TracksIcon />} />
                    <MenuItem to={routes.zingchart} title="Zingchart" icon={<ZingchartIcon />} />
                    <MenuItem to={routes.radio} title="Radio" icon={<RadioIcon />} />
                </div>
            </Menu>
            <Menu label="My Collection">
                <div className={cx('menu')}>
                    <MenuItem to={routes.favourites} title="Likes" icon={<HeartIcon />} />
                    <MenuItem to={routes.tracks} title="Tracks" icon={<TracksIcon />} />
                    <MenuItem to={routes.playlists} title="Playlists" icon={<PlaylistsIcon />} />
                </div>
            </Menu>
            <Menu label="General">
                <div className={cx('menu')}>
                    <MenuItem to={routes.settings} title="Dark mode" icon={<Switch size="small" />} isLink={false} />
                    <MenuItem to={routes.logout} title="Log Out" icon={<LogoutIcon />} />
                </div>
            </Menu>
        </div>
    );
}

export default Sidebar;
