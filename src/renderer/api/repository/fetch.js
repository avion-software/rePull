import request from '../../utils/api/request';

export default async function fetchRepository(repositoryId) {
    const res = await request(`/repositories/${repositoryId}/fetch`, 'POST');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}