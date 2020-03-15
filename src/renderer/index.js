import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import { Provider } from 'react-redux';
import request from './utils/api/request';
import store from './store';
import { loadRepositories } from './store/reducers/repositories/actions';
import RepositoryListContainer from './components/repository-list/RepositoryListContainer';

ipcRenderer.send('update-notify-value', 'Hello World');

request('/repositories').then(async (res) => {
    console.log(res, await res.json());
});

store.dispatch(loadRepositories());
 
const Index = () => {
    return (
        <Provider store={store}>
            <div>Hello React!</div>
            <RepositoryListContainer/>
        </Provider>
    );
};
 
ReactDOM.render(<Index />, document.getElementById('app'));
