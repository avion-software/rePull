import { makeStyles } from '@material-ui/core';

const useToolbarCenterItemStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        width: 300,

        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    name: {
        fontSize: 24,
        color: theme.palette.primary.main,
        textShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
        fontWeight: 'bold',
    },
    branch: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
        height: 14,
        fontStyle: 'italic',
    },
}));

export default useToolbarCenterItemStyles;
