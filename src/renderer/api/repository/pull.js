import request from '../../utils/api/request';
import sendNotification from '../notifications/send';

export default async function pullRepository(repository, notification = true) {
    const res = await request(`/repositories/${repository.id}/pull`, 'POST');

    if (res.statusCode === 200) {
        const json = await res.json();

        if (notification) {
            sendNotification(
                `${repository.name} - Pull`,
                'Successfully pulled the changes from the remote repository.',
            );
        }

        return json;
    }

    if (notification) {
        sendNotification(
            `${repository.name} - Pull`,
            'Failed to pull changes from the remote repository.',
        );
    }

    return null;
}