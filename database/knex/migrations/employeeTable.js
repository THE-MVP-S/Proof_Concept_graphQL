exports.up = function (knex, Promise) {
  return knex.schema.createTable("employee", function (table) {
    table.increments("id").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("date");
    table.string("city");
    table.string("state");
    table.integer("department_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
   .then(() => console.log("table employee created"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("employee");
};



