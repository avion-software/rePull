export const getRepositoryChanges = (state, repositoryId) => state
    .repositoryChanges.values[repositoryId];
export const getRepositoryStagedChanges = (
    state,
    repositoryId,
) => getRepositoryChanges(state, repositoryId)?.staged;
export const getRepositoryUnstagedChanges = (
    state,
    repositoryId,
) => getRepositoryChanges(state, repositoryId)?.unstaged;
