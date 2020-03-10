import listRepositories from './list';
import getRepositoryStatus from './get-status';

export default function createRepositoryEndpoints(server) {
    server.get('/repositories', listRepositories);
    server.get('/repositories/:repositoryId/status', getRepositoryStatus);
}
