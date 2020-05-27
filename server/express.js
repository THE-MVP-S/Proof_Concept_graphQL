const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const knex = require('../database/knexfile');

app.use(express.json());

// start database connection
knex.raw("SELECT VERSION()")
  .then((version) => console.log((version[0][0])))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
        knex.destroy();
    });

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Employee {
    first_name: String,
    last_name: String,
    start_date: String,
    city: String,
    state: String,
    position_id: ID, 
  }

  type Position {
    title: String,
    department: String,
    description: String,

  }
`);
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello World!';
  },
  name: () => {
    return 'martin';
  },
  employee: (root, args, context, info) => {
    return knex.from('cars').select(args)
      .then((rows) => {
        for (row of rows) {
          console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }
      })
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
        knex.destroy();
      });
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  pretty: true
}));

module.exports = app;