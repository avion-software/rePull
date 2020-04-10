import { makeStyles } from '@material-ui/core';

const useCommitInputStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    commitButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: 10,
    },
}));

export default useCommitInputStyles;
