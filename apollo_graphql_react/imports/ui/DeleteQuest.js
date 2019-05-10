import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const deleteQuest = gql`
  mutation deleteQuest($_id: _id!) {
    deleteQuest(_id: $_id) {
      _id
    }
  }
`;

export default class DeleteQuest extends Component {
  deleteQuest = () => {
    console.log(this._id);
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteQuest}>Delete</button>
      </div>
    );
  }
}
