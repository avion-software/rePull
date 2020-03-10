import findGitRepositoryPathes from '../fs/findGitRepositoryPathes';
import Repository from './Repository';

const REFRESH_TIME = 15 * 60 * 1000;

export default class RepositoryManager {
    #lastRefresh = null;

    #repositories = {};

    #loadPromise;

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
            const repo = new Repository(repositoryPath);

            if (!(await repo.isGitRepo())) {
                return;
            }

            this.#repositories[repositoryPath] = repo;
        });

        await Promise.all(promises);
    };

    async getRepositories() {
        await this.#loadPromise;

        return Object.values(this.#repositories);
    }
}
