import findGitRepositoryPathes from '../fs/findGitRepositoryPathes';
import Repository from './Repository';

const REFRESH_TIME = 15 * 60 * 1000;

export default class RepositoryManager {
    #lastRefresh = null;

    #repositories = {};

    #repositoriesById = {};

    #loadPromise;

    static #RepositoryManager = new RepositoryManager();

    /**
     * Returns an instance of the RepositoryManager
     * @returns {RepositoryManager}
     * @constructor
     */
    static Instance() {
        return this.#RepositoryManager;
    }

    constructor() {
        this.#loadPromise = this.#reload();
    }

    async reload() {
        this.#loadPromise = this.#reload();
        await this.#loadPromise;
    }

    #reload = async () => {
        if (this.#lastRefresh > Date.now() - REFRESH_TIME) {
            await this.#loadPromise;
            return;
        }

        this.#lastRefresh = Date.now();

        const repositories = await findGitRepositoryPathes(process.env.GIT_WORKSPACE);
        const promises = repositories.map(async (repositoryPath) => {
            if (this.#repositories[repositoryPath]) {
                return;
            }

            const repo = new Repository(repositoryPath);

            if (!(await repo.isGitRepo())) {
                return;
            }

            this.#repositories[repositoryPath] = repo;
            this.#repositoriesById[await repo.getId()] = repo;
        });

        await Promise.all(promises);
    };

    async getRepositories() {
        await this.#loadPromise;

        return Object.values(this.#repositories);
    }

    async getRepositoryById(id) {
        return this.#repositoriesById[id] || null;
    }
}
