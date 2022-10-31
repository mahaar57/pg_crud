// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://" +
      process.env.POSTGRES_USER +
      ":" +
      process.env.POSTGRES_PASSWORD +
      "@" +
      process.env.POSTGRES_HOST +
      "/" +
      process.env.POSTGRES_DATABASE,
    connectTimeout: 10000,
    migrations: {
      directory: "./migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection:
      "postgres://" +
      process.env.POSTGRES_USERNAME +
      ":" +
      process.env.POSTGRES_PASSWORD +
      "@" +
      process.env.POSTGRES_HOST +
      "/" +
      process.env.POSTGRES_DATABASE,
    migrations: {
      directory: "./migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
