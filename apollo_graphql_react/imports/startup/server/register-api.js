import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import QuestsSchema from "../../api/quests/Quests.graphql";
import QuestsResolvers from "../../api/quests/resolvers";
// graphql workaround x1
const testSchema = `
type Query {
  init: String
  quests: [Quest]
}
`;

const typeDefs = [testSchema, QuestsSchema];

const testResolvers = {
  Query: {
    init() {
      return "Initializing fragtrak";
    }
  }
};

const resolvers = merge(testResolvers, QuestsResolvers);

console.log(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
