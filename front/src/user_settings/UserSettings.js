/**
 * @flow strict
 * @format
 */

import * as React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { Alert, Spinner, Table, Button } from 'reactstrap';
import { Error, QueryRenderer } from 'react-relay';
import nullthrows from 'nullthrows';
import type UserSettingsQueryResponse from './__generated__/UserSettingsQuery.graphql';
import RelayEnvironment from '../RelayEnvironment';
import CurrentUser from '../utils/CurrentUser';
import { Link } from 'react-browser-router';

type Props = {||}
type State = {||};

const query = graphql`
  query UserSettingsQuery($id: Int!) {
    user(id: $id) {
      userId: id
      firstName
      lastName
      email
      phone
      settings {
        settingId: id
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
  }
`;

class UserSettings extends React.Component<Props, State> {
  renderLoading = (): React.Element<'div'> => {
    return (
      <div className={'text-center'}>
        <Spinner type='grow' color='success' />
      </div>
    );
  };

  renderError = (error: Error): React.Element<typeof Alert> => {
    const errorMessage = error.toString();
    return <Alert color={`danger`}>{errorMessage}</Alert>;
  };

  renderSuccess = (props: UserSettingsQueryResponse): React.Element<'div'> => {
    const { user } = props;
    const { settings } = user;
    return (
      <div className={`table-responsive`}>
        <div className={`actions`}>
          <Button color='warning' tag={Link} to={`/user/settings/edit`}>
            Create
          </Button>
        </div>
        <Table>
          <thead className={`thead-dark`}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Account Key</th>
              <th>Account Secret Key</th>
              <th>Account Token</th>
              <th>API Endpoint</th>
              <th>From Number</th>
              <th>Segment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {settings ? (
              settings.map(setting => {
                return (
                  <tr key={setting.settingId}>
                    <td>{setting.settingId}</td>
                    <td>{setting.name}</td>
                    <td>{setting.accountKey}</td>
                    <td>{setting.accountSecretKey}</td>
                    <td>{setting.accountToken}</td>
                    <td>{setting.apiEndpoint}</td>
                    <td>{setting.fromNumber}</td>
                    <td>{setting.segment}</td>
                    <td>{setting.status}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={9} className={'text-center'}>
                  No data available...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  };

  render() {
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={query}
        variables={{
          id: CurrentUser.getId(),
        }}
        render={(response): React.Element<'div' | typeof Alert | typeof Table> => {
          const { error, props } = response;
          if (error) {
            return this.renderError(error);
          } else if (props) {
            return this.renderSuccess(props);
          }
          return this.renderLoading();
        }}
      />
    );
  }
}
export default UserSettings;
