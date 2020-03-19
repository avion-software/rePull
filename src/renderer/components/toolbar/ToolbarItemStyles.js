import { makeStyles } from '@material-ui/core';

const useToolbarItemStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 80,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background-color .3s',

        '&:hover': {
            backgroundColor: theme.palette.primary[theme.palette.type],
        },

        '&:hover $label, &:hover $icon': {
            opacity: 1,
        },
    },
    iconWrapper: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-end',
    },
    icon: {
        fontSize: 32,
        opacity: 0.5,

        transition: 'opacity .3s',
    },
    label: {
        fontSize: 14,
        opacity: 0.5,

        padding: '5px 0',

        transition: 'opacity .3s',
    },
}));

export default useToolbarItemStyles;
