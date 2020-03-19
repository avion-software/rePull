import request from '../../utils/api/request';

export default async function getRepositoryStatus(repository) {
    const res = await request(`/repositories/${repository.id}/status`, 'GET');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}
