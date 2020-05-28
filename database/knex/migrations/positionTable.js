exports.up = function (knex, Promise) {
  knex.schema
    .createTable("position", (table) => {
      table.increments("id").notNullable();
      table.string("title");
      table.string("description");
      table.string("salary");
      table.integer("department_id");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => console.log("table position created"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
    
exports.down = function (knex, Promise) {
    return knex.schema.dropTable("position");
};
