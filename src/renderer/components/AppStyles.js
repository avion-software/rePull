import { makeStyles } from '@material-ui/core';

const useAppStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    toolbar: {
        flexGrow: 0,
        flexShrink: 0,
    },
    main: {
        overflow: 'auto',
        flexGrow: 1,
        flexShrink: 1,
    }
}));

export default useAppStyles;
