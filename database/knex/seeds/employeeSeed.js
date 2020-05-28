exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee").insert([
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
      ]);
    });
};
