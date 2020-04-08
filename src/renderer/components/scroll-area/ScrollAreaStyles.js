import { makeStyles } from '@material-ui/core';

const useScrollAreaStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',

        '&:hover::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.scrollbar.thumb,
        },

        '&::-webkit-scrollbar': {
            width: 6,
            cursor: 'pointer',

            backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 3,
            cursor: 'pointer',
            transition: 'background-color .3s',

            '&:hover': {
                backgroundColor: theme.palette.scrollbar.thumbHover,
            },
        },
    },
}));

export default useScrollAreaStyles;
