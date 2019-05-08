import Quests from "./quests";

export default {
  Query: {
    quests() {
      return Quests.find({}).fetch();
    }
  },

  Mutation: {
    createQuest(obj, { name }, context) {
      console.log(name);
      const questId = Quests.insert({
        name
      });
      return Quests.findOne(questId);
    }
  }
};
