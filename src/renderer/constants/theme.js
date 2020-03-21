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
            sidebar: '#262626',
        },
        badge: {
            pull: green[500],
            push: red[500],
        },
    },
});

export default theme;
