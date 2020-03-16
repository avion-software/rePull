import { makeStyles } from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        height: 80,
        backgroundColor: theme.palette.background.toolbar,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    center: {
        flexShrink: 0,
        flexGrow: 0,
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-end',
    },
}));

export default useToolbarStyles;
