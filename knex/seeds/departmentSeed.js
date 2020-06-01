exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("departments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("departments").insert([
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
