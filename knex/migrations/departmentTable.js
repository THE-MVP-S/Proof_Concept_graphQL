exports.up = function (knex, Promise) {
  return knex.schema.createTable("departments", (table) => {
      table.increments("id").notNullable();
      table.string("departmentName").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => console.log("departments table created"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("departments");
};