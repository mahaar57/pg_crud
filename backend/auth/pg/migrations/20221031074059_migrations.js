/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("accounts", (table) => {
      table.increments();
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table.boolean("is_active").notNullable().defaultTo(false);
      table.timestamps(true, true);
    })
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("name").notNullable();
      table.string("contact").notNullable();
      table.integer("account_id").references("id").inTable("accounts");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
