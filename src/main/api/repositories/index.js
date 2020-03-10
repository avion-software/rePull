import listRepositories from './list';
import getRepositoryStatus from './get-status';
import fetch from './actions/fetch';

export default function createRepositoryEndpoints(server) {
    server.get('/repositories', listRepositories);
    server.get('/repositories/:repositoryId/status', getRepositoryStatus);
    server.post('/repositories/:repositoryId/fetch', fetch);
}
