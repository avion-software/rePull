import request from '../../utils/api/request';

export default async function getRepositoryStatus(repository) {
    const res = await request(`/repositories/${repository.id}/status`, 'GET');

    if (res.statusCode === 200) {
        return await res.json();
    }

    return null;
}
