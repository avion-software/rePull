import path from 'path';
import crypto from 'crypto';
import SimpleGit from 'simple-git/promise';
import BranchManager from './branches/BranchManager';

export default class Repository {
    #id;

    #path;

    #simpleGit;

    #branchManager;

    constructor(pPath) {
        this.#id = crypto.createHash('md5').update(pPath).digest('hex');
        this.#path = pPath;
        this.#simpleGit = SimpleGit(pPath);

        this.#branchManager = new BranchManager(this);
    }

    getSimpleGit() {
        return this.#simpleGit;
    }

    async isGitRepo() {
        try {
            return !!(await this.#simpleGit.checkIsRepo());
        } catch {
            return false;
        }
    }

    async status() {
        return this.#simpleGit.status();
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

    async push(remote, branch) {
        return this.#simpleGit.push(remote, branch);
    }

    async remotes() {
        return new Promise((resolve, reject) => {
            this.#simpleGit.getRemotes((err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(data);
            });
        });
    }

    async getBranchManager() {
        return this.#branchManager;
    }

    async localBranches() {
        return this.#branchManager.getBranches();
    }

    async remoteBranches() {
        return this.#branchManager.getBranchesOfAllRemotes();
    }

    async branches() {
        const localBranches = await this.localBranches();
        const remoteBranches = await this.remoteBranches();

        return {
            local: localBranches,
            remotes: remoteBranches,
        };
    }

    async commit(message, description) {
        if (description) {
            return this.#simpleGit.commit(message, description);
        }

        return this.#simpleGit.commit(message);
    }

    toJSON() {
        return {
            id: this.#id,
            name: path.basename(this.#path),
            path: this.#path,
        };
    }
}
