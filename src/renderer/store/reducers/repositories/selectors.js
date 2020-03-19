import { createSelector } from 'reselect';

export const getRepositories = (state) => state.repositories.values;
export const getRepositoryMap = createSelector(
    getRepositories,
    (repositories) => {
        const retVal = {};

        repositories.forEach((repository) => {
            retVal[repository.id] = repository;
        });

        return retVal;
    },
);
export const getRepository = (state, repositoryId) => (
    getRepositoryMap(state)[repositoryId] || null
);
