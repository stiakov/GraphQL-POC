'use strict'

const { graphql, buildSchema } = require('graphql')

// Defining schema
const schema = buildSchema(`
    type Query {
        hello: String
        greeting: String
    }
`)

// Setting up Resolvers

const resolvers = {
  hello: () => 'Hello world',
  greeting: () => 'Hey everyone!',
}

// Executing the hello query
graphql(schema, '{ greeting }', resolvers)
  .then(data => console.log(data))
