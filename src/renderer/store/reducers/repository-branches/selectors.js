export const getRepositoryBranches = (state, repositoryId) => state
    .repositoryBranches.values[repositoryId];

// eslint-disable-next-line max-len
export const getLocalRepositoryBranches = (state, repositoryId) => getRepositoryBranches(state, repositoryId)?.local;

// eslint-disable-next-line max-len
export const getRemoteRepositoryBranches = (state, repositoryId) => getRepositoryBranches(state, repositoryId)?.remotes;
