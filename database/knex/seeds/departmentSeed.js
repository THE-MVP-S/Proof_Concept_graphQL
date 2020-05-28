exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee").insert([
        { 
            departmentName: "electronics" 
        },
        { 
            departmentName: "automotive" 
        },
        { 
            departmentName: "sporting goods", 
        }
      ]);
    });
};
