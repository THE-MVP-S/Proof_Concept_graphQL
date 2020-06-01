exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee").insert([
        {
          firstName: "Ray",
          lastName: "Dunning",
          date: "2020-05-01",
          city: "Killeen",
          state: "Texas",
          department_id: 1,
        },
        {
          firstName: "Zach",
          lastName: "Yusuf",
          date: "2020-06-05",
          city: "Austin",
          state: "Texas",
          department_id: 2,
        },
        {
          firstName: "Martin",
          lastName: "Ramos",
          date: "2020-04-21",
          city: "Killeen",
          state: "Texas",
          department_id: 3,
        },
        {
          firstName: "Aaron",
          lastName: "Evans",
          date: "2020-04-01",
          city: "Killeen",
          state: "Texas",
          department_id: 2,
        },
        {
          firstName: "Josh",
          lastName: "Halsey",
          date: "2020-05-06",
          city: "Killeen",
          state: "Texas",
          department_id: 1,
        },
      ]);
    });
};
