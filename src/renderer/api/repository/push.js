import request from '../../utils/api/request';

export default async function pushRepository(repositoryId, remote, branch) {
    const res = await request(`/repositories/${repositoryId}/push`, 'POST', {
        remote,
        branch,
    });

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}
