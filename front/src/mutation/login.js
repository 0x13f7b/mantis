/**
 * @flow strict
 * @format
 */
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type loginMutationResponse from './__generated__/loginMutation.graphql.js';

const mutation = graphql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

const loginMutation = (
  email: ?string,
  password: ?string,
  onCompleted: (response: loginMutationResponse) => void,
  onError: (err: Error) => void,
) => {
  const variables = {
    email,
    password,
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    onCompleted: response => {
      onCompleted(response);
    },
    onError: err => {
      onError(err);
    },
  });
};

export default loginMutation;
