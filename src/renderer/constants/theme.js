import { createMuiTheme } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#0d47a1',
        },
        secondary: {
            main: '#311b92',
        },
        background: {
            paper: '#424242',
            default: '#303030',
            toolbar: '#202020',
            bottomBar: '#202020',
            sidebar: '#262626',
            sidebarSection: '#202020',
        },
        badge: {
            pull: green[500],
            push: red[500],
        },
        scrollbar: {
            thumb: 'rgba(13, 71, 161, 0.5)',
            thumbHover: 'rgba(13, 71, 161, 0.9)',
        },
        sidebar: {
            currentBranch: '#b3d0ff',
        },
        contextMenu: {
            itemHover: 'rgba(13, 71, 161, 0.2)',
        },
    },
});

export default theme;
