require("dotenv").config();
const knex = require('../knex/knex');


const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  employees: () => {
    return knex
      .select("*")
      .from("employee")
      .then((result) => result);
  },
  employeeByName: (root,{firstName, lastName}) => {
    return knex
      .select("*")
      .from("employee")
      .where({
        firstName,
        lastName,
      })
      .then((result) => result);
  },
  employeeByID: (root, {id}) => {
    return knex
      .select("*")
      .from("employee")
      .where({
        id,
      })
      .then((result) => result);
  },
};
// How to make complex query calls. 
// const Student = {
//   fullName: (root, args, context, info) => {
//     return root.firstName + ":" + root.lastName
//   },
//   college: (root) => {
//     return db.colleges.get(root.collegeId);
//   }
// };

const Mutation = {
  // createStudent: (root, args, context, info) => {
  //   return db.students.create({
  //     collegeId: args.collegeId,
  //     firstName: args.firstName,
  //     lastName: args.lastName,
  //   });
  // },

  // // new resolver function
  // addStudent_returns_object: (root, args, context, info) => {
  //   const id = db.students.create({
  //     collegeId: args.collegeId,
  //     firstName: args.firstName,
  //     lastName: args.lastName,
  //   });

  //   return db.students.get(id);
  // },
  // CREATE ROUTES
  addEmployee: (root, args, context, info) => {
    return knex('employee')
      .insert({
        firstName: args.firstName,
        lastName: args.lastName,
        city: args.city,
        state: args.state,
        date: args.date
      })
      .then(results => console.log(args))

  },
  // addPosition: (root, args, context, info) => {},
  // addDepartment: (root, args, context, info) => {},
  
  // // DELETE ROUTE
  // rmEmployee: (root, args, context, info) => {},
  // rmPosition: (root, args, context, info) => {},
  // rmDepartment: (root, args, context, info) => {},

  // // UPDATE ROUTES
  // updateEmployee: (root, args, context, info) => {},
  // updatePosition: (root, args, context, info) => {},
  // updateDepartment: (root, args, context, info) => {},
};
module.exports = { Query };
