import Quests from "./quests";

export default {
  Query: {
    quests() {
      return Quests.find({}).fetch();
    }
  },

  Mutation: {
    createQuest() {
      console.log("Successfully ran createQuest Mutation!");
      // const questId = Quests.insert({
      //   name: "Pilot Episode"
      // });
    }
  }
};
