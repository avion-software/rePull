import request from '../../utils/api/request';

export default async function getRepositoryChanges(repository) {
    const res = await request(`/repositories/${repository.id}/changes`, 'GET');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}
