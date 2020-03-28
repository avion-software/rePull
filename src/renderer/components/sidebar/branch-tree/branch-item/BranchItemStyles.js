import { makeStyles } from '@material-ui/core';

const useBranchItemStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 19,
    },
    active: {
        fontWeight: 'bold',
        color: theme.palette.sidebar.currentBranch,
    },
}));

export default useBranchItemStyles;
