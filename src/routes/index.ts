import React, { FC } from 'react';

// Layouts
import NoSongPlaying from '~/layouts/NoSongPlaying';
import NoLayout from '~/layouts/NoLayout';

import routes from '~/config/routes';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
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
        path: routes.recently,
        component: Recently,
    },
    {
        path: routes.favourites,
        component: NotExist,
    },
    {
        path: routes.create,
        component: NotExist,
    },
    {
        path: routes.album,
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
