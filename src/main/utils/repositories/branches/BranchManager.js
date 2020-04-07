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
            const branch = new Branch(this.#repository, branchConfig);
            this.#branchById[branch.getId()] = branch;
            this.#localBranches[branch.getId()] = branch;
        });
    };

    #requestRemoteBranches = async (remote) => {
        const remoteBranchesRaw = await this.#repository.getSimpleGit().listRemote(['--heads', remote]);
        const retVal = [];

        await Promise.all(remoteBranchesRaw.split('\n').map(async (rawLine) => {
            const line = rawLine.split('\t');

            if ((rawLine.indexOf('\t') === -1) || !line[1].startsWith('refs/heads')) {
                return;
            }

            const name = line[1].substring(11);

            const shortHash = await this.#repository.getSimpleGit().revparse(['--short', line[0]]);

            const branch = {
                name,
                remote,
                path: name.split('/'),
                current: false,
                commit: shortHash,
            };

            retVal.push(branch);
        }));
        return retVal;
    };

    #loadRemoteBranches = async () => {
        const remotes = await this.#repository.remotes();

        await Promise.all(remotes.map(async (remote) => {
            try {
                if (!this.#branchByRemote[remote.name]) {
                    this.#branchByRemote[remote.name] = {};
                }

                const remoteBranches = await this.#requestRemoteBranches(remote.name);
                remoteBranches.forEach((remoteBranchConfig) => {
                    const branch = new Branch(this.#repository, remoteBranchConfig, remote.name);

                    this.#branchById[branch.getId()] = branch;
                    this.#branchByRemote[remote.name][branch.getId()] = branch;
                });
            } catch (ex) {
                console.error(ex);
            }
        }));
    };

    async getBranches(remote = false) {
        if (remote === false) {
            await this.#loadLocalBranches();
            return Object.values(this.#localBranches);
        }

        await this.#loadRemoteBranches();
        return Object.values(this.#branchByRemote[remote]);
    }

    async getBranchesOfAllRemotes() {
        await this.#loadRemoteBranches();

        const retVal = {};

        Object.entries(this.#branchByRemote).forEach(([remote, branchObject]) => {
            retVal[remote] = Object.values(branchObject);
        });

        return retVal;
    }
}
