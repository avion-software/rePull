import path from 'path';
import crypto from 'crypto';
import SimpleGit from 'simple-git/promise';
import parseBranchPaths from './branches/parseBranchParts';
import groupBranchesByRemotes from './branches/groupBranchesByRemotes';

export default class Repository {
    #id;

    #path;

    #simpleGit;

    constructor(pPath) {
        this.#id = crypto.createHash('md5').update(pPath).digest('hex');
        this.#path = pPath;
        this.#simpleGit = SimpleGit(pPath);
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

    #branchLocal = async () => new Promise((resolve, reject) => {
        this.#simpleGit.branchLocal((error, branches) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(branches);
        });
    });

    async branches() {
        const localBranches = await this.#branchLocal();
        const remoteBranches = await this.#simpleGit.branch(['--remotes']);

        return {
            local: parseBranchPaths(localBranches.branches),
            remotes: groupBranchesByRemotes(parseBranchPaths(remoteBranches.branches)),
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
