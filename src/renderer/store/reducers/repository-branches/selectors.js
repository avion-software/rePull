// eslint-disable-next-line import/prefer-default-export
export const getRepositoryBranches = (state, repositoryId) => state
    .repositoryBranches.values[repositoryId];
