'use strict'

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()
const port = process.env.port || 3000

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
  greeting: () => 'Hey everyone!'
}

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at ${port}`)
})
