import { makeStyles } from '@material-ui/core';

const useExpansionPanelStyles = makeStyles(() => ({
    head: {
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
    },
    iconWrapper: {
        width: 14,
        justifyContent: 'center',
    },
    icon: {
        transition: 'transform .3s',
    },
    open: {
        transform: 'rotate(90deg)',
    },
    title: {
        paddingLeft: 5,
    },
}));

export default useExpansionPanelStyles;
