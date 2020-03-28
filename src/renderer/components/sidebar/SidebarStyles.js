import { makeStyles } from '@material-ui/core';

const useSidebarStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        height: '100%',
        backgroundColor: theme.palette.background.sidebar,
        paddingTop: '5px',
        fontSize: 13,
    },
}));

export default useSidebarStyles;
