import { makeStyles } from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    toolbar: {
        height: 80,
        backgroundColor: theme.palette.background.toolbar,
    },
}));

export default useToolbarStyles;
