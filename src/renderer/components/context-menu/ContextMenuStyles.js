import { makeStyles } from '@material-ui/core';

const useContextMenuStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        padding: 5,
        backgroundColor: '#1A1A1A',
        minWidth: 200,
        pointerEvents: 'all',
        border: `1px solid ${theme.palette.primary[theme.palette.type]}`,
        boxShadow: '0 0 10px #1A1A1A',
    },
}));

export default useContextMenuStyles;
