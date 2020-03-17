import { createMuiTheme } from '@material-ui/core';

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
        }
    },
});

export default theme;
