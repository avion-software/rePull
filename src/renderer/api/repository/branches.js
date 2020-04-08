import request from '../../utils/api/request';

export default async function getRepositoryBranches(repository, remotes = false) {
    const res = await request(`/repositories/${repository.id}/branches?remotes=${String(!!remotes)}`, 'GET');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}
