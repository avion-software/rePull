import { ipcRenderer } from 'electron';
import Client from '../../../utils/api/Client';

const client = new Client(ipcRenderer);

export default function request(url, method, body, header) {
    return client.request(url, method, body, header);
}
