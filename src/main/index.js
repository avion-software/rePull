import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';
import MainServer from './utils/api/MainServer';

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: resolve(__dirname, 'preload.js'),
    }
  });

  const mainServer = new MainServer();
  mainServer.get('/data', (ctx) => {
    ctx.body = 'Hello World!';
    ctx.status = 200;
  });
 
  // and load the index.html of the app.
  win.loadFile('index.html');
}
 
app.on('ready', createWindow);
