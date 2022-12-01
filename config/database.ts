export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dmr'),
      user: env('DATABASE_USERNAME', 'dmr'),
      password: env('DATABASE_PASSWORD', 'dmr'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
