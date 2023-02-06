type IconsType = {
    width?: string;
    height?: string;
    className?: string;
};

export const LogoIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="6"></circle>
        <g className="logo-loading-spin">
            <circle cx="16" cy="16" r="1" fill="#fff"></circle>
        </g>
    </svg>
);

export const SearchIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
        ></path>
    </svg>
);

export const HomeIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
    </svg>
);

export const RecentlyIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
    </svg>
);

export const HeartIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
    </svg>
);

export const PlusIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
    </svg>
);

export const AlbumIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M11.024 11.536 10 10l-2 3h9l-3.5-5z"></path>
        <circle cx="9.503" cy="7.497" r="1.503"></circle>
        <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path>
    </svg>
);

export const PlaylistsIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
    </svg>
);

export const SettingIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
        <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
    </svg>
);

export const LogoutIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
        <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
    </svg>
);

export const RandomIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path>
        <path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path>
    </svg>
);

export const VolumeMuteIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path>
    </svg>
);

export const AlarmIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9 9-4.121 9-9-4.121-9-9-9zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7 7 3.206 7 7-3.206 7-7 7z"></path>
        <path d="M13 12V8h-2v6h6v-2zm4.284-8.293 1.412-1.416 3.01 3-1.413 1.417zm-10.586 0-2.99 2.999L2.29 5.294l2.99-3z"></path>
    </svg>
);

export const TracksIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        role="img"
        focusable="false"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

export const ZingchartIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path>
        <path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path>
    </svg>
);

export const RadioIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <circle cx="12.01" cy="12" r="2"></circle>
        <path d="M11.01 22h2l.5-7h-3l.5 7z"></path>
        <path d="M12 2a10 10 0 0 0-2.45 19.68l-.15-2.12a8 8 0 1 1 5.21 0l-.15 2.12A10 10 0 0 0 12 2z"></path>
        <path d="M15.32 9.61a3.44 3.44 0 0 1 .37.68 3.83 3.83 0 0 1 .23.75 3.57 3.57 0 0 1 .09.8 3.66 3.66 0 0 1-.09.81 3.83 3.83 0 0 1-.23.75 3.44 3.44 0 0 1-.37.68 4.7 4.7 0 0 1-.35.43l-.19 2.62a5.33 5.33 0 0 0 .58-.31A5.86 5.86 0 0 0 17 15.2a5.57 5.57 0 0 0 .55-1 5.89 5.89 0 0 0 .35-1.13 6.06 6.06 0 0 0 .1-1.23 6.22 6.22 0 0 0-.13-1.21A6.09 6.09 0 0 0 17 8.49a6.29 6.29 0 0 0-.73-.89 5.67 5.67 0 0 0-.89-.73 6.3 6.3 0 0 0-1-.56A6.17 6.17 0 0 0 13.21 6a6.11 6.11 0 0 0-2.41 0 5.51 5.51 0 0 0-1.13.36 5.57 5.57 0 0 0-1 .55 5.67 5.67 0 0 0-.89.73 6.29 6.29 0 0 0-.78.85 6.09 6.09 0 0 0-.9 2.14 6.21 6.21 0 0 0-.1 1.21 6.06 6.06 0 0 0 .12 1.21 5.89 5.89 0 0 0 .35 1.13 5.57 5.57 0 0 0 .55 1 6.24 6.24 0 0 0 1.62 1.62 5.33 5.33 0 0 0 .58.31L9 14.51a4.7 4.7 0 0 1-.35-.43 3.44 3.44 0 0 1-.37-.68 3.83 3.83 0 0 1-.23-.75 3.65 3.65 0 0 1-.05-.81 3.56 3.56 0 0 1 .08-.8 3.83 3.83 0 0 1 .23-.75 3.44 3.44 0 0 1 .37-.68 4 4 0 0 1 .5-.61 3.87 3.87 0 0 1 .59-.48 3.44 3.44 0 0 1 .68-.37 3.86 3.86 0 0 1 .75-.24 4.36 4.36 0 0 1 1.61 0 3.86 3.86 0 0 1 .75.24 3.58 3.58 0 0 1 1.27.85 3.49 3.49 0 0 1 .49.61z"></path>
    </svg>
);

export const PlayIcon = ({ width = '2.4rem', height = '2.4rem', className }: IconsType) => (
    <svg
        width={width}
        height={height}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="#fff"
    >
        <g id="Play">
            <path
                d="M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995
		C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012
		C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993
		c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993z
		 M25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z"
            />
            <path
                d="M32,0C14.3268995,0,0,14.3268995,0,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62
		C15.4579,62,2,48.542099,2,32C2,15.4580002,15.4579,2,32,2c16.5419998,0,30,13.4580002,30,30C62,48.542099,48.5419998,62,32,62z"
            />
        </g>
    </svg>
);

export const TagVIP = ({ width = '2.4rem', height = '2rem', className }: IconsType) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Header/vip" transform="translate(-1024.000000, -50.000000)" fillRule="nonzero">
                <g id="icon-header" transform="translate(813.500000, 12.000000)">
                    <g id="ava" transform="translate(200.000000, 0.000000)">
                        <g id="Group" transform="translate(9.000000, 37.000000)">
                            <g id="small-vip" transform="translate(2.000000, 1.000000)">
                                <rect
                                    id="Rectangle-Copy-2"
                                    fill="#FFDB00"
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="50%"
                                    rx="3"
                                ></rect>
                                <path
                                    d="M7.33807531,9.2 C6.96903766,9.2 6.71422594,8.99790795 6.57364017,8.66401674 L4.5790795,3.89288703 C4.53514644,3.7874477 4.5,3.68200837 4.5,3.56778243 C4.5,3.18995816 4.79874477,2.9 5.17656904,2.9 C5.52803347,2.9 5.75648536,3.10209205 5.86192469,3.37447699 L7.39958159,7.35481172 L8.95481172,3.33054393 C9.04267782,3.11087866 9.27991632,2.9 9.60502092,2.9 C9.97405858,2.9 10.2728033,3.18117155 10.2728033,3.55020921 C10.2728033,3.65564854 10.2376569,3.76987448 10.2025105,3.84895397 L8.19037657,8.66401674 C8.04979079,8.99790795 7.79497908,9.2 7.42594142,9.2 L7.33807531,9.2 Z M12.0545328,8.47949791 L12.0545328,3.57656904 C12.0545328,3.19874477 12.3532775,2.9 12.7311018,2.9 C13.1089261,2.9 13.4076708,3.19874477 13.4076708,3.57656904 L13.4076708,8.47949791 C13.4076708,8.85732218 13.1089261,9.15606695 12.7311018,9.15606695 C12.3532775,9.15606695 12.0545328,8.85732218 12.0545328,8.47949791 Z M15.6287308,8.47949791 L15.6287308,3.6292887 C15.6287308,3.25146444 15.9274756,2.95271967 16.3052998,2.95271967 L18.1417015,2.95271967 C19.6090655,2.95271967 20.4965132,3.82259414 20.4965132,5.0790795 L20.4965132,5.09665272 C20.4965132,6.52008368 19.3894003,7.258159 18.0099023,7.258159 L16.9818689,7.258159 L16.9818689,8.47949791 C16.9818689,8.85732218 16.6831241,9.15606695 16.3052998,9.15606695 C15.9274756,9.15606695 15.6287308,8.85732218 15.6287308,8.47949791 Z M16.9818689,6.05439331 L18.0538354,6.05439331 C18.7304044,6.05439331 19.1258019,5.65020921 19.1258019,5.12301255 L19.1258019,5.10543933 C19.1258019,4.49916318 18.7040446,4.17405858 18.0274756,4.17405858 L16.9818689,4.17405858 L16.9818689,6.05439331 Z"
                                    id="VIP-Copy"
                                    fill="#362800"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
