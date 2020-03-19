// eslint-disable-next-line import/prefer-default-export
export const getRepositoryStatus = (state, repositoryId) => state
    .repositoryStatus.values[repositoryId];
