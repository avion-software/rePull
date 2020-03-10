import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import request from './utils/api/request';

ipcRenderer.send('update-notify-value', 'Hello World');

request('/repositories').then(async (res) => {
    console.log(res, await res.json());
});
 
const Index = () => {
    return <div>Hello React!</div>;
};
 
ReactDOM.render(<Index />, document.getElementById('app'));
