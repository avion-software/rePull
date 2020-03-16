import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';
import MainServer from './utils/api/MainServer';
import createRepositoryEndpoints from './api/repositories';

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'rePull',
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
