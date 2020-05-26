const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const knex = require('../database/knexfile');

app.use(express.json());

knex.raw("SELECT VERSION()").then(
  (version) => console.log((version[0][0]))
).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
  }
`);
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello World!';
  },
  name: () => {
    return 'martin';
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  pretty: true
}));

module.exports = app;