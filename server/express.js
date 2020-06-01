const express = require('express');
const knex = require('../knex/knex');
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();

// start database connection
knex.raw("SELECT VERSION()")
  .then((version) => console.log((version[0][0])))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
        knex.destroy();
    });

// import graphql schema and resolvers
const fs = require('fs')
const typeDefs = gql(fs.readFileSync('./schema.graphql',{encoding:'utf-8'}))
const resolvers = require('./resolvers')



// connect using apollo-server-express
const server = new ApolloServer({ 
                                  typeDefs, 
                                  resolvers,
                                  playground: true,
                                  introspection: true
                                 });
server.applyMiddleware({ app });


module.exports = app;