import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import QuestForm from "./QuestForm";

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.init}</h1>
      <QuestForm />
      <ul>
        {" "}
        {data.quests.map(quest => (
          <li key={quest._id}>{quest.name}</li>
        ))}
      </ul>
    </div>
  );
};

const initQuery = gql`
  {
    init
    quests {
      _id
      name
    }
  }
`;

export default graphql(initQuery)(App);
