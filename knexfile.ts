import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mssql',
        connection: {
            host: 'localhost',
            // TODO: Use your user & password from Microsoft SQL Server
            user: 'bookish_database_user',
            password: 'bookish_database_user',
            database: 'bookish',
        },
    },
};

export default config;
