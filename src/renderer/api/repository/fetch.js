import request from '../../utils/api/request';
import sendNotification from '../notifications/send';

export default async function fetchRepository(repository, notification = true) {
    const res = await request(`/repositories/${repository.id}/fetch`, 'POST');

    if (res.statusCode === 200) {
        const json = await res.json();

        if (notification) {
            sendNotification(
                `${repository.name} - Fetch`,
                'Successfully fetched the changes of the repository.',
            );
        }
        return json;
    }

    if (notification) {
        sendNotification(
            `${repository.name} - Fetch`,
            'Failed to fetch changes of the repository.',
        );
    }

    return null;
}