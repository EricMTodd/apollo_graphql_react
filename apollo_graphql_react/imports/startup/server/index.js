import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
  init: String
}
`;

const resolvers = {
  Query: {
    init() {
      return "Initializing fragtrak";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });
