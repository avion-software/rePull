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
        flexShrink: 0,
    },
    icon: {
        transition: 'transform .3s',
    },
    open: {
        transform: 'rotate(90deg)',
    },
    title: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 5,
        flexGrow: 1,
    },
}));

export default useExpansionPanelStyles;
