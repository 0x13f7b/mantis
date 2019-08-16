/**
 * @flow strict
 * @format
 */

import * as React from 'react';

import type { BrowserHistory } from 'history/createBrowserHistory';
import type UserSettingEditQueryResponse from './__generated__/UserSettingEditQuery.graphql';
import type UserSettingEditQueryVariables from './__generated__/UserSettingEditQuery.graphql';
import type UserSettingInput from '../mutation/__generated__/createUserSettingMutation.graphql.js';
import { fromPairs } from 'lodash';
import graphql from 'babel-plugin-relay/macro';
import { Error, QueryRenderer } from 'react-relay';
import RelayEnvironment from '../RelayEnvironment';
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert, Spinner } from 'reactstrap';
import networkTypes from '../constants/NetworkTypes';
import createUserSettingMutation from '../mutation/createUserSetting.js';
import updateUserSettingMutation from '../mutation/updateUserSetting.js';
import SupportEngStringUtil from '../utils/SupportEngStringUtil';
import Tour from 'reactour';

const { Fragment } = React;
const { convertSnakeCaseToTitleCase } = SupportEngStringUtil;

type Props = {||} & BrowserHistory;
type State = {|
  tourActive: boolean,
  tourStep: number,
|};

const tourStepts = [
  {
    selector: '.tour-networkName',
    content: `Please set your desired name for this specific network setting.`,
  },
  {
    selector: '.tour-networkType',
    content: `Please select your network type. The system currently supports integration with Twilio, Nexmo and Bandwidth.`,
  },
  {
    selector: '.tour-accountKey',
    content: `Please input your account key or user id from the network credentials. This is mandatory.`,
  },
  {
    selector: '.tour-accountSecretKey',
    content: `Please input your account secret key from the network credentials. This is mandatory..`,
  },
  {
    selector: '.tour-accountToken',
    content: `Please input your account token from the network credentials. This is optional and on multiple networks is the same as the secret key.`,
  },
  {
    selector: '.tour-apiEndpoint',
    content: `Every network should have an api endpoint. Could be REST, Soap, XML-RPC, etc.`,
  },
  {
    selector: '.tour-fromNumber',
    content: `Please select the number from, you must have at least one and you can have multiple configs for multiple numbers.`,
  },
  {
    selector: '.tour-segment',
    content: `You can have multiple segments here, e.g: Login validation, Notifications, this is a free form field and if you leave it blank it will default to [GENERIC].`,
  },
];

const query = graphql`
  query UserSettingEditQuery($id: Int) {
    userSetting(id: $id) {
      id
      name
      networkType
      accountKey
      accountToken
      accountSecretKey
      apiEndpoint
      fromNumber
      segment
      status
      extra
    }
  }
`;

class UserSettingEdit extends React.Component<Props, State> {
  state = {
    tourActive: true,
    tourStep: 1,
  };

  onRequestClose = () => {
    this.setState({
      tourActive: false,
    });
  };
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

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const input: UserSettingInput = fromPairs(Array.from(formData.entries()));
    input.userId = parseInt(localStorage.getItem('userId'));
    input.networkType = parseInt(input['networkType']);
    const {
      match: {
        params: { id = null },
      },
      history,
    } = this.props;
    if (!id) {
      createUserSettingMutation(
        input,
        response => {
          return history.push(`/user/settings`);
        },
        this.handleMutationError,
      );
    } else {
      updateUserSettingMutation(
        id,
        input,
        response => {
          return history.push(`/user/settings`);
        },
        this.handleMutationError,
      );
    }
  };

  handleMutationError = (error: Error): void => {
    //@todo: error boundary
  };

  renderSuccess = (props: UserSettingEditQueryResponse) => {
    const { userSetting } = props;
    const formData = Object.assign(
      {
        id: null,
        name: null,
        userId: null,
        networkType: null,
        accountKey: null,
        accountSecretKey: null,
        accountToken: null,
        apiEndpoint: null,
        fromNumber: null,
        segment: null,
        extra: null,
        status: null,
      },
      userSetting,
    );
    return (
      <Fragment>
        <Tour
          steps={tourStepts}
          isOpen={this.state.tourActive}
          onRequestClose={this.onRequestClose}
        />
        <Row>
          <Col md={3} />
          <Col md={6}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  className={'tour-networkName'}
                  type='text'
                  name='name'
                  id='name'
                  defaultValue={formData.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for='networkType'>Network Type</Label>
                <Input
                  className={'tour-networkType'}
                  type='select'
                  name='networkType'
                  id='networkType'
                  defaultValue={formData.networkType}>
                  {Object.keys(networkTypes).map(key => {
                    return (
                      <option value={networkTypes[key]} key={key}>
                        {convertSnakeCaseToTitleCase(key)}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='accountKey'>Account Key</Label>
                <Input
                  className={'tour-accountKey'}
                  type='text'
                  name='accountKey'
                  id='accountKey'
                  defaultValue={formData.accountKey}
                />
              </FormGroup>
              <FormGroup>
                <Label for='accountSecretKey'>Account Secret Key</Label>
                <Input
                  className={'tour-accountSecretKey'}
                  type='text'
                  name='accountSecretKey'
                  id='accountSecretKey'
                  defaultValue={formData.accountSecretKey}
                />
              </FormGroup>
              <FormGroup>
                <Label for='accountToken'>Account Token</Label>
                <Input
                  className={'tour-accountToken'}
                  type='text'
                  name='accountToken'
                  id='accountToken'
                  defaultValue={formData.accountToken}
                />
              </FormGroup>
              <FormGroup>
                <Label for='apiEndpoint'>API Endpoint</Label>
                <Input
                  className={'tour-apiEndpoint'}
                  type='text'
                  name='apiEndpoint'
                  id='apiEndpoint'
                  defaultValue={formData.apiEndpoint}
                />
              </FormGroup>
              <FormGroup>
                <Label for='fromNumber'>Number From</Label>
                <Input
                  className={'tour-fromNumber'}
                  type='text'
                  name='fromNumber'
                  id='fromNumber'
                  defaultValue={formData.fromNumber}
                />
              </FormGroup>
              <FormGroup>
                <Label for='segment'>Segment</Label>
                <Input
                  className={'tour-segment'}
                  type='text'
                  name='segment'
                  id='segment'
                  defaultValue={formData.segment}
                />
              </FormGroup>
              <FormGroup>
                <Button type='submit' color='success'>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Col>
          <Col md={3} />
        </Row>
      </Fragment>
    );
  };

  render() {
    const {
      match: {
        params: { id = null },
      },
    } = this.props;
    const variables: UserSettingEditQueryVariables = { id: parseInt(id) };
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={query}
        variables={variables}
        render={(response): React.Element<'div' | typeof Alert | typeof Row> => {
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

export default UserSettingEdit;
