import React from 'react';
import './GlobalStyles.scss';

type GlobalStylesType = {
    children: JSX.Element;
};

function GlobalStyles({ children }: GlobalStylesType) {
    return children;
}

export default GlobalStyles;
