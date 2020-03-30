import parseBranchPaths from './parseBranchParts';
import Branch from './Branch';

export default class BranchManager {
    #repository;

    #branchById = {};

    #localBranches = {};

    #branchByRemote = {};

    constructor(repository) {
        this.#repository = repository;
    }

    #requestLocalBranches = () => new Promise((resolve, reject) => {
        this.#repository.getSimpleGit().branchLocal((error, branches) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(branches);
        });
    });

    #loadLocalBranches = async () => {
        const localBranches = await this.#requestLocalBranches();
        parseBranchPaths(localBranches.branches).forEach((branchConfig) => {
            const branch = new Branch(branchConfig);
            this.#branchById[branch.getId()] = branch;
            this.#localBranches[branch.getId()] = branch;
        });
    };

    #loadRemoteBranches = async () => {

    };

    async getBranches(remote = false) {
        if (remote === false) {
            await this.#loadLocalBranches();
            return Object.values(this.#localBranches);
        }

        await this.#loadRemoteBranches();
        return Object.values(this.#branchByRemote[remote]);
    }
}
