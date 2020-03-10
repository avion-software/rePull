import { ipcMain } from 'electron';

import Server from '../../../utils/api/Server';

export default class MainServer extends Server {
    constructor() {
        super(ipcMain);
    }
}
