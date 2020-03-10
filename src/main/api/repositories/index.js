import listRepositories from './list';

export default function createRepositoryEndpoints(server) {
    server.get('/repositories', listRepositories);
}
