import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => <h1>{data.init}</h1>;

const initQuery = gql`
  {
    init
  }
`;

export default graphql(initQuery)(App);
