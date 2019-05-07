import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createQuest = gql`
  mutation createQuest {
    createQuest {
      _id
    }
  }
`;

class QuestForm extends Component {
  submitForm = () => {
    console.log(this.name.value);
    this.props.createQuest();
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default graphql(createQuest, {
  name: "createQuest"
})(QuestForm);
