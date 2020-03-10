import SimpleGit from 'simple-git/promise';

export default class Repository {
    #path;

    #simpleGit;

    constructor(path) {
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

    async getPath() {
        return this.#path;
    }

    toJSON() {
        return {
            path: this.#path,
        };
    }
}
