import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';
import MainServer from './utils/api/MainServer';
import RepositoryManager from './utils/repositories/RepositoryManager';

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
  const repoManager = new RepositoryManager();
  mainServer.get('/repositories', async (ctx) => {
    await repoManager.reload();
    ctx.body = (await repoManager.getRepositories()).map(repo => repo.toJSON());
    ctx.status = 200;
  });
 
  // and load the index.html of the app.
  win.loadFile('index.html');
}
 
app.on('ready', createWindow);
