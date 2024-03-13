'use  strict';

const Hapi = require('@hapi/hapi');
const notesPlugin = require('./plugins/notes');
const UserPlugin = require('./plugins/userNotes');

const init = async () => {

    //membuat server
    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0',
        "routes": {
            cors: true
        },
    });
    await server.register([
        {
            plugin : notesPlugin,
            options : {}
        },
        {
            plugin : UserPlugin,
            options : {}
        }
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();