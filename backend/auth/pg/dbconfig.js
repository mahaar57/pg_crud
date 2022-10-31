const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

//Knex Configuration
/**
 * @type {import ('knex').Knex}
 */
const knex = Knex(knexConfig.development);

const dbConnection = function () {
  //Initialize knex Model
  Model.knex(knex);
  console.log("DB CREATED");
};

const destroyDB = async function () {
  await knex.destroy();
  console.log("DB DESTROYED");
};

module.exports = { dbConnection, destroyDB };
