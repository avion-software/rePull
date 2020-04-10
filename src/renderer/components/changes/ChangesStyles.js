import { makeStyles } from '@material-ui/core';

const useChangesStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    main: {
        flexGrow: 1,
    },
    bottomBar: {
        backgroundColor: console.log(theme) || theme.palette.background.bottomBar,
    },
}));

export default useChangesStyles;
