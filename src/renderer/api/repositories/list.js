import request from '../../utils/api/request';

export default async function listRepositories() {
    const res = await request('/repositories');

    if (res.statusCode === 200) {
        return res.json();
    }

    return null;
}
