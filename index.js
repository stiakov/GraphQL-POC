'use strict'

const express = require('express')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Defining schema
const typeDefs = readFileSync(
  join('./', 'lib', 'schema.graphql'),
  'utf-8'
  )

const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at ${port}`)
})
