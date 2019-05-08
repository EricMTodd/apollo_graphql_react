import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createQuest = gql`
  mutation createQuest($name: String!) {
    createQuest(name: $name) {
      _id
    }
  }
`;

class QuestForm extends Component {
  submitForm = () => {
    this.props
      .createQuest({
        variables: {
          name: this.name.value
        }
      })
      .then(({ data }) => {
        this.props.refetch();
      })
      .catch(error => {
        console.log(error);
      });
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
