const knex = require("../migrations/knexfile");
require("dotenv").config();

// CREATE TABLE
exports.up = function (knex, Promise) {
  knex.schema.createTable("employee", (table) => {
    table.increments("id");
    table.string("first_name");
    table.string("last_name");
    table.string("date");
    table.string("city");
    table.string("state");
    table.integer("department_id");
  });
}
  .then(() => console.log("table employee created"))
  .catch((err) => {
    console.log(err);
    throw err;
  });

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("employee");
};

exports.up = function (knex, Promise) {
  knex.schema
    .createTable("position", (table) => {
      table.increments("id");
      table.string("title");
      table.string("department");
      table.string("description");
      table.string("salary");
      table.integer("department_id");
    })
    .then(() => console.log("table position created"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("position");
  };
};

exports.up = function (knex, Promise) {
  knex.schema
    .createTable("departments", (table) => {
      table.increments("id");
      table.integer("department_id");
      table.string("department");
      // table.integer('department_id')
      // table.integer('department_id')
    })
    .then(() => console.log("table departments created"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
}.finally(() => {
  knex.destroy();
});
exports.down = function (knex, Promise) {
  return knex.schema.dropTable("departments");
};

// SEED DATABASE
const employee = [
  {
    first_name: "Ray",
    last_name: "Dunning",
    date: "2020-05-01",
    city: "Killeen",
    state: "Texas",
    department_id: 1,
  },
  {
    first_name: "Zach",
    last_name: "Yusuf",
    date: "2020-06-05",
    city: "Austin",
    state: "Texas",
    department_id: 2,
  },
  {
    first_name: "Martin",
    last_name: "Ramos",
    date: "2020-04-21",
    city: "Killeen",
    state: "Texas",
    department_id: 3,
  },
  {
    first_name: "Aaron",
    last_name: "Evans",
    date: "2020-04-01",
    city: "Killeen",
    state: "Texas",
    department_id: 2,
  },
  {
    first_name: "Josh",
    last_name: "Halsey",
    date: "2020-05-06",
    city: "Killeen",
    state: "Texas",
    department_id: 1,
  },
];
knex("employee")
  .insert(employee)
  .then(() => console.log("data inserted for employee"))
  .catch((err) => {
    console.log(err);
    throw err;
  });
//     .finally(() => {
//     knex.destroy();
// });

const position = [
  {
    title: "Store associate",
    department: "electronics",
    description: "assists the elecronics cumstomers",
    salary: "$45,000",
    department_id: 1,
  },
  {
    title: "Cashier",
    department: "automotive",
    description: "assists the automotive cumstomers",
    salary: "$45,000",
    department_id: 2,
  },
  {
    title: "Cashier",
    department: "sporting goods",
    description: "Checks out the customer",
    salary: "$24,000",
    department_id: 3,
  },
  {
    title: "Store associate",
    department: "automotive",
    description: "Handles the customer returns",
    salary: "$31,000",
    department_id: 2,
  },
  {
    title: "Store associate",
    department: "electronics",
    description: "Stocks shevles and assists customers",
    salary: "$21,000",
    department_id: 1,
  },
];

knex("position")
  .insert(position)
  .then(() => console.log("data inserted for position"))
  .catch((err) => {
    console.log(err);
    throw err;
  });
//     .finally(() => {
//     knex.destroy();
// });

const departments = [
  { department: "electronics", department_id: 1 },
  { department: "automotive", department_id: 2 },
  { department: "sporting goods", department_id: 3 },
];

knex("departments")
  .insert(departments)
  .then(() => console.log("data inserted for departments"))
  .catch((err) => {
    console.log(err);
    throw err;
  });
//     .finally(() => {
//     knex.destroy();
// });
