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

    toJSON() {
        return {
            path: this.#path,
        };
    }
}
