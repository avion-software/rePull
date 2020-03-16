import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';
import MainServer from './utils/api/MainServer';
import createRepositoryEndpoints from './api/repositories';
import {
  MAIN_WINDOW_DEFAULT_HEIGHT,
  MAIN_WINDOW_DEFAULT_TITLE,
  MAIN_WINDOW_DEFAULT_WIDTH
} from './constants/app-constants';

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: MAIN_WINDOW_DEFAULT_WIDTH,
    height: MAIN_WINDOW_DEFAULT_HEIGHT,
    title: MAIN_WINDOW_DEFAULT_TITLE,
    webPreferences: {
      nodeIntegration: false,
      preload: resolve(__dirname, 'preload.js'),
    }
  });

  const mainServer = new MainServer();
  createRepositoryEndpoints(mainServer);
 
  // and load the index.html of the app.
  win.loadFile('index.html');
}
 
app.on('ready', createWindow);
