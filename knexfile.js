module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '',
            database: 'financial',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};
