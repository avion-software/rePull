import request from '../../utils/api/request';
import sendNotification from '../notifications/send';

export default async function pushRepository(repository, { remote, branch }, notification = true) {
    const res = await request(`/repositories/${repository.id}/push`, 'POST', {
        remote,
        branch,
    });

    if (res.statusCode === 200 || res.statusCode === 204) {
        const json = await res.json();

        if (notification) {
            sendNotification(
                `${repository.name} - Push`,
                'Successfully pushed the changes to the remote repository.',
            );
        }

        return json;
    }

    if (notification) {
        sendNotification(
            `${repository.name} - Push`,
            'Failed to push the changes to the remote repository.',
        );
    }

    return null;
}
