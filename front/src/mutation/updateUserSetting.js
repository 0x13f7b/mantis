/**
 * @flow strict
 * @format
 */
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type updateUserSettingMutationResponse from './__generated__/updateUserSettingMutation.graphql.js';
import type UserSettingInput from './__generated__/updateUserSettingMutation.graphql.js';
import type updateUserSettingMutationVariables from './__generated__/updateUserSettingMutation.graphql.js';

const mutation = graphql`
  mutation updateUserSettingMutation($id: ID!, $input: UserSettingInput!) {
    updateUserSetting(id: $id, input: $input) {
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

const updateUserSettingMutation = (
  id: String,
  input: UserSettingInput,
  onCompleted: (response: updateUserSettingMutationResponse) => void,
  onError: (err: Error) => void,
) => {
  const variables: updateUserSettingMutationVariables = {
    id,
    input,
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

export default updateUserSettingMutation;
