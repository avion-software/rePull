import request from '../../utils/api/request';

export default async function pullRepository(repositoryId) {
    const res = await request(`/repositories/${repositoryId}/pull`, 'POST');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}