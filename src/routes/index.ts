import React, { FC } from 'react';
import routes from '~/config/routes';

// Layouts
import NoSongPlaying from '~/layouts/NoSongPlaying';
import NoLayout from '~/layouts/NoLayout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ZingChart from '~/pages/ZingChart';
import Recently from '~/pages/Recently';
import NotExist from '~/pages/NotExist';

type publicRoutesType = {
    path: string;
    component: FC;
    layout?: React.ElementType;
};

export const publicRoutes: Array<publicRoutesType> = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.zingchart,
        component: ZingChart,
    },
    {
        path: routes.favourites,
        component: NotExist,
    },
    {
        path: routes.settings,
        component: NotExist,
    },
    {
        path: routes.logout,
        component: NotExist,
    },
    {
        path: routes.login,
        component: Login,
        layout: NoLayout,
    },
];
