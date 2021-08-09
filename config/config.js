require("dotenv").config();
module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    host: "petapp_db",
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
