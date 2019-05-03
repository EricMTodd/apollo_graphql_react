import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import QuestsSchema from "../../api/quests/Quests.graphql";

const testSchema = `
type Query {
  hi: String
}
`;

const typeDefs = [testSchema, QuestsSchema];

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
});

createApolloServer({ schema });
