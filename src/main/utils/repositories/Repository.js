import crypto from 'crypto';
import SimpleGit from 'simple-git/promise';

export default class Repository {
    #id;

    #path;

    #simpleGit;

    constructor(path) {
        this.#id = crypto.createHash('md5').update(path).digest('hex');
        this.#path = path;
        this.#simpleGit = SimpleGit(path);
    }

    async isGitRepo() {
        try {
            return !!(await this.#simpleGit.checkIsRepo());
        } catch {
            return false;
        }
    }

    async status() {
        return await this.#simpleGit.status();
    }

    async getId() {
        return this.#id;
    }

    async getPath() {
        return this.#path;
    }

    async fetch(remote, branch) {
        return this.#simpleGit.fetch(remote, branch);
    }

    async pull(remote, branch) {
        return this.#simpleGit.pull(remote, branch);
    }

    toJSON() {
        return {
            id: this.#id,
            path: this.#path,
        };
    }
}
