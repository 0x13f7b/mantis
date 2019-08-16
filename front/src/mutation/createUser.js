/**
 * @flow strict
 * @format
 */
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type createUserMutationResponse from './__generated__/createUserMutation.graphql.js';
import type UserInput from './__generated__/createUserMutation.graphql.js';
import type createUserMutationVariables from './__generated__/createUserMutation.graphql.js';

const mutation = graphql`
  mutation createUserMutation($input: UserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      status
      apiToken
    }
  }
`;

const createUserMutation = (
  input: UserInput,
  onCompleted: (response: createUserMutationResponse) => void,
  onError: (err: Error) => void,
) => {
  const variables: createUserMutationVariables = { input };
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

export default createUserMutation;
