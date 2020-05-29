exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("position")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("position").insert([
        {
          title: "Store associate",
          description: "assists the elecronics cumstomers",
          salary: "$45,000",
          department_id: 1,
        },
        {
          title: "Cashier",
          description: "assists the automotive cumstomers",
          salary: "$45,000",
          department_id: 2,
        },
        {
          title: "Cashier",
          description: "Checks out the customer",
          salary: "$24,000",
          department_id: 3,
        },
        {
          title: "Store associate",
          description: "Handles the customer returns",
          salary: "$31,000",
          department_id: 4,
        },
        {
          title: "Store associate",
          description: "Stocks shevles and assists customers",
          salary: "$21,000",
          department_id: 5,
        },
      ]);
    });
};
