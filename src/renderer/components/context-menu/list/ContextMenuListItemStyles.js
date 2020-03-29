import { makeStyles } from '@material-ui/core';

const useContextMenuListItemStyles = makeStyles((theme) => ({
    root: {
        padding: 5,

        '&:hover': {
            backgroundColor: theme.palette.contextMenu.itemHover,
        },
    },
}));

export default useContextMenuListItemStyles;
