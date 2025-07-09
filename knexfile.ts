import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mssql',
        connection: {
            host: 'localhost',
            // TODO: Use your user & password from Microsoft SQL Server
            user: 'anya',
            password: 'Anya!DB123_!PaSS@',
            database: 'bookish',
        },
    },
};

export default config;
