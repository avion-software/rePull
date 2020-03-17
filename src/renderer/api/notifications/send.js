export default async function sendNotification(title, body = '', onClick = null) {
    const notification = new Notification(title, {
        body,
    });

    if (onClick) {
        notification.onclick = onClick;
    }
}