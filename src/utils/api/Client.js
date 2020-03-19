import uuid from 'uuid/v4';

export default class Client {
    #eventEmitter;

    #promiseCallbacks = {};

    constructor(eventEmitter) {
        this.#eventEmitter = eventEmitter;
        this.#eventEmitter.on('response', this.#handleResponse);
    }

    #handleResponse = (event, data) => {
        if (this.#promiseCallbacks[data.id]?.resolve) {
            this.#promiseCallbacks[data.id].resolve({
                statusCode: data.statusCode,
                json: async () => data.body,
                headers: data.headers,
            });
        }
    };

    request(path, method = 'GET', body = null, headers = null) {
        const id = uuid();

        this.#eventEmitter.send('request', {
            id,
            path,
            method,
            body,
            headers,
        });

        return new Promise((resolve, reject) => {
            this.#promiseCallbacks[id] = {
                resolve,
                reject,
            };
        });
    }
}
