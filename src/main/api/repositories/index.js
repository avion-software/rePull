import listRepositories from './list';
import getRepositoryStatus from './get-status';
import fetch from './actions/fetch';
import pull from './actions/pull';
import commit from './actions/commit';
import push from './actions/push';

export default function createRepositoryEndpoints(server) {
    server.get('/repositories', listRepositories);
    server.get('/repositories/:repositoryId/status', getRepositoryStatus);
    server.post('/repositories/:repositoryId/fetch', fetch);
    server.post('/repositories/:repositoryId/pull', pull);
    server.post('/repositories/:repositoryId/commit', commit);
    server.post('/repositories/:repositoryId/push', push);
}
