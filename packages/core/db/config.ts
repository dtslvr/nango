import type { Knex } from 'knex';

let config: { development: Knex.Config<any>; production: Knex.Config<any> } = {
    development: {
        client: 'pg',
        connection: {
            host: process.env['NANGO_SERVER_RUN_MODE'] === 'DOCKERIZED' ? 'nango-db' : 'localhost',
            port: 5432,
            user: 'nango',
            database: 'nango',
            password: 'nango'
        },
        migrations: {
            directory: './migrations',
            extension: 'ts'
        }
    },

    production: {
        client: 'pg',
        connection: {
            host: process.env['NANGO_SERVER_RUN_MODE'] === 'DOCKERIZED' ? 'nango-db' : 'localhost',
            port: 5432,
            user: 'nango',
            database: 'nango',
            password: 'nango'
        },
        migrations: {
            directory: './migrations',
            extension: 'ts'
        }
    }
};

export { config };
