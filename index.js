'use strict'

const { graphql, buildSchema } = require('graphql')


// Defining schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Executing the hello query
graphql(schema, '{ hello }')
    .then(data => console.log(data));