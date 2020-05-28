exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("position")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("position").insert([
        {
          title: "Store associate",
          department: "electronics",
          description: "assists the elecronics cumstomers",
          salary: "$45,000",
        },
        {
          title: "Cashier",
          department: "automotive",
          description: "assists the automotive cumstomers",
          salary: "$45,000",
        },
        {
          title: "Cashier",
          department: "sporting goods",
          description: "Checks out the customer",
          salary: "$24,000",
        },
        {
          title: "Store associate",
          department: "automotive",
          description: "Handles the customer returns",
          salary: "$31,000",
        },
        {
          title: "Store associate",
          department: "electronics",
          description: "Stocks shevles and assists customers",
          salary: "$21,000",
        },
      ]);
    });
};
