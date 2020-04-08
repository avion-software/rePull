import { makeStyles } from '@material-ui/core';

const useSidebarSectionStyles = makeStyles((theme) => ({
    name: {
        backgroundColor: theme.palette.background.sidebarSection,
        marginTop: 5,
        padding: '2px 5px',
    },
}));

export default useSidebarSectionStyles;
