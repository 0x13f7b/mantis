/**
 * @flow strict
 * @format
 */
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type createUserSettingMutationResponse from './__generated__/createUserSettingMutation.graphql.js';
import type UserSettingInput from './__generated__/createUserSettingMutation.graphql.js';
import type createUserSettingMutationVariables from './__generated__/createUserSettingMutation.graphql.js';

const mutation = graphql`
  mutation createUserSettingMutation($input: UserSettingInput!) {
    createUserSetting(input: $input) {
      id
      name
      accountKey
      accountSecretKey
      accountToken
      apiEndpoint
      fromNumber
      segment
      status
    }
  }
`;

const createUserSettingMutation = (
  input: UserSettingInput,
  onCompleted: (response: createUserSettingMutationResponse) => void,
  onError: (err: Error) => void,
) => {
  const variables: createUserSettingMutationVariables = { input };
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

export default createUserSettingMutation;
