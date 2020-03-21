import request from '../../utils/api/request';

export default async function getRepositoryBranches(repository) {
    const res = await request(`/repositories/${repository.id}/branches`, 'GET');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}
