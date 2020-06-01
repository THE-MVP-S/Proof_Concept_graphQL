exports.up = function (knex, Promise) {
  return knex.schema.createTable("employee", function (table) {
    table.increments("id").notNullable();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("date");
    table.string("city");
    table.string("state");
    table.integer("department_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
    .then(() => console.log("employee table created"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("employee");
};



