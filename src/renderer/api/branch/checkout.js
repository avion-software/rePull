import request from '../../utils/api/request';

export default async function checkout(repository, branch, remote = false) {
    const res = await request(`/repositories/${repository.id}/checkout`, 'POST', {
        branchId: branch.id,
        remote,
    });

    if (res.statusCode === 200) {
        return res.json();
    }

    if (res.statusCode === 409) {
        return {
            status: 409,
            data: await res.json(),
        };
    }

    return null;
}
