import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';
import theme from './constants/theme';
import { loadRepositories } from './store/reducers/repositories/actions';
import App from './components/App';

store.dispatch(loadRepositories());
 
const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
            <CssBaseline />
        </ThemeProvider>
    );
};
 
ReactDOM.render(<Index />, document.getElementById('app'));
