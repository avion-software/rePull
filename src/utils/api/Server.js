import Router from '@koa/router';

export default class Server {
    #router = new Router();

    constructor(eventEmitter) {
        this.handleRequest = this.handleRequest.bind(this);
        eventEmitter.on('request', this.handleRequest);

        this.get = this.#router.get.bind(this.#router);
        this.post = this.#router.post.bind(this.#router);
    }

    async handleRequest(event, data) {
        const responseHeaders = {};

        const ctx = {
            path: data.path,
            method: data.method,
            set: (key, value) => { responseHeaders[key] = value; },
            request: {
                headers: data.headers,
                method: data.method,
                path: data.path,
                body: data.body,
            },
            response: {

            },
        };

        try {
            const next = () => {
            };
            await this.#router.routes()(ctx, next);
            event.reply('response', {
                id: data.id,
                body: JSON.stringify(ctx.body),
                headers: responseHeaders,
                statusCode: ctx.status,
            });
        } catch (ex) {
            event.reply('response', {
                id: data.id,
                body: ex,
                headers: {},
                statusCode: 500,
            });
        }
    }
}
