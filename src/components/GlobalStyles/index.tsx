import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '~/assets/css/grid.css';

import './GlobalStyles.scss';

type GlobalStylesType = {
    children: JSX.Element;
};

function GlobalStyles({ children }: GlobalStylesType) {
    return children;
}

export default GlobalStyles;
