import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import QuestsSchema from "../../api/quests/Quests.graphql";

const testSchema = `
type Query {
  init: String
  quests: [Quest]
}
`;

const typeDefs = [testSchema, QuestsSchema];

const resolvers = {
  Query: {
    init() {
      return "Initializing fragtrak";
    },
    quests() {
      return [
        {
          _id: "INSERT_SUBJECT_GENERIC_STRING_HERE",
          name: "INSERT_SUBJECT_QUEST_NAME_HERE"
        },
        {
          _id: "INSERT_SUBJECT_GENERIC_STRING_HERE2",
          name: "INSERT_SUBJECT_QUEST_NAME_HERE2"
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
