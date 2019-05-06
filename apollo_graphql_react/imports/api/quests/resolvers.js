import Quests from "./quests";

// Quests.insert({
//   name: "Pilot Episode"
// });

export default {
  Query: {
    quests() {
      return Quests.find({}).fetch();
    }
  }
};
