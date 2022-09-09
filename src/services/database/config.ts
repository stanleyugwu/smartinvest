import EnvironmentVariables from "../../modules/dotenv";

// setting up the env variables
EnvironmentVariables().init();

const { DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

const dialectOptions = {
  bigNumberStrings: true,
  typeCast: function (field, next) {
    if (field.type === "DATETIME" || field.type === "TIMESTAMP") {
      return new Date(field.string() + "Z");
    }

    return next();
  },
};

const config = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_SERVER,
    port:DB_PORT,
    dialect: "mysql",
    dialectOptions,
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_meta",
    seederStorage: "sequelize",
    seederStorageTableName: "sequelize_data",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_SERVER,
    port:DB_PORT,
    dialect: "mysql",
    dialectOptions,
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_meta",
    seederStorage: "sequelize",
    seederStorageTableName: "sequelize_data",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_SERVER,
    port:DB_PORT,
    dialect: "mysql",
    dialectOptions,
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_meta",
    seederStorage: "sequelize",
    seederStorageTableName: "sequelize_data",
  },
};

module.exports = config
