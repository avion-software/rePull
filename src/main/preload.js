const { ipcRenderer } = require('electron');
const uuidV4 = require('uuid/v4');

// eslint-disable-next-line no-undef
window.electron = {
    ipcRenderer,
};

// eslint-disable-next-line no-undef
window.uuid = {
    v4: uuidV4,
};
