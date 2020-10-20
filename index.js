'use strict'

const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Defining schema
const schema = buildSchema(
  readFileSync(
    join('./', 'lib', 'schema.graphql'),
    'utf-8'
  )
)

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at ${port}`)
})
