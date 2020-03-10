const { ipcRenderer } = require('electron');
const uuidV4 = require('uuid/v4');

window.electron = {
    ipcRenderer,
};

window.uuid = {
    v4: uuidV4,
};
