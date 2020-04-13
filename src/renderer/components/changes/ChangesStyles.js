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
        backgroundColor: theme.palette.background.bottomBar,
    },
    files: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
    },
    filesStaged: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '50%',
    },
    filesUnstaged: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '50%',
    },
}));

export default useChangesStyles;
