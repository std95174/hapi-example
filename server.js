'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        host: process.env.HOST,
        port: process.env.PORT,
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            console.log(`Server got a request.`);
            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();