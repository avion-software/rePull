import crypto from 'crypto';

export default class Branch {
    #config;

    #remote;

    #id;

    constructor(config, remote = false) {
        const stringId = `${(remote === false) ? 'local' : remote}~${config.path.join('/')}`;
        this.#id = crypto.createHash('md5').update(stringId).digest('hex');
        this.#config = config;
        this.#remote = remote;
    }


    getId() {
        return this.#id;
    }

    toJSON() {
        return {
            id: this.#id,
            name: this.#config.name,
            path: this.#config.path,
            current: this.#config.current,
        };
    }
}
