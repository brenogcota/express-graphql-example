const express = require('express')
const { graphqlHTTP } =  require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');

const resolvers = require('./resolvers')

const schema = makeExecutableSchema({
  typeDefs: loadSchemaSync('src/schemas/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: resolvers,
});

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))
app.listen(4000)
console.log('Running GraphQL API server')
