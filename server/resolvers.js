const db = require("./db");
const knex = require('../database/knexfile');


const Query = {
  greeting: () => "Test Success, GraphQL server is up & running !!",
  students: () => db.students.list(),
  //resolver function with arguments and returning object
  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  sayHello: (root, args, context, info) =>
    `Hi ${args.name} GraphQL server says Hello to you!!`,
};
// How to make complex query calls. 
const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + ":" + root.lastName
  },
  college: (root) => {
    return db.colleges.get(root.collegeId);
  }
};

const Mutation = {
  createStudent: (root, args, context, info) => {
    return db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName,
    });
  },

  // new resolver function
  addStudent_returns_object: (root, args, context, info) => {
    const id = db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName,
    });

    return db.students.get(id);
  },
};
module.exports = { Query, Student, Mutation };
