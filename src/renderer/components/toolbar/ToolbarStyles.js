import { makeStyles } from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        height: 80,
        backgroundColor: theme.palette.background.toolbar,
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    center: {
        flexShrink: 0,
        flexGrow: 0,
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        justifyContent: 'flex-end',
    },
}));

export default useToolbarStyles;
