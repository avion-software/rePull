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
    }
}));

export default useToolbarCenterItemStyles;
