/**
 * @flow strict
 * @format
 */
import * as React from 'react';
import _ from 'lodash';
import { QueryRenderer, Error } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import { Table, Alert, Spinner, Button } from 'reactstrap';
import nullthrows from 'nullthrows';
import type NetworkEventsQueryResponse from './__generated__/NetworkEventsQuery.graphql';
import NetworkEventRequestBodyModal from './NetworkEventRequestBodyModal';
import NetworkEventTypes from '../constants/NetworkEventTypes';
import Status from '../constants/Status';
import Regions from '../constants/Regions';
import { Link } from 'react-browser-router';
import { PhoneNumberFormat as PNF, PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
const networkEventTypeNames = _.invert(NetworkEventTypes);
const statusNames = _.invert(Status);
const regionNames = _.invert(Regions);

const { Fragment } = React;

type Props = {|
  match: {
    params: {
      id: string,
    },
  },
|};
type State = {|
  requestBodyModal: boolean,
  requestBodyModalData: any,
|};

const query = graphql`
  query NetworkEventsQuery($networkId: Int!) {
    networkEvents(networkId: $networkId) {
      id
      network {
        id
      }
      regionName
      regionType
      regionDID
      requestBody
      eventUUID
      eventMicrotime
      eventType
      operationTime
      score
      accountId
      status
      network {
        id
        name
      }
    }
  }
`;

class NetworkEvents extends React.Component<Props, State> {
  state = {
    requestBodyModal: false,
    requestBodyModalData: {},
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

  renderSuccess = (props: NetworkEventsQueryResponse): React.Element<'div'> => {
    const { networkEvents = [] } = props;
    const { requestBodyModal, requestBodyModalData = {} } = this.state;
    return (
      <div className={`table-responsive`}>
        <Table>
          <thead className={`thead-dark`}>
            <tr>
              <th>UUID</th>
              <th>Region</th>
              <th>Region DID</th>
              <th>Netork</th>
              <th>Event Microtime</th>
              <th>Event Type</th>
              <th>Operation Time</th>
              <th>Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {networkEvents ? (
              networkEvents.map(
                (networkEvent): React.Element<'tr'> => {
                  const {
                    network: { name: networkName },
                  } = networkEvent;
                  let formattedPhoneNumber = '';
                  try {
                    const phoneNumber = `+${networkEvent.regionDID}`;
                    const phoneNumberParsed = phoneUtil.parse(phoneNumber, null);
                    formattedPhoneNumber = phoneUtil.format(phoneNumberParsed, PNF.INTERNATIONAL);
                  } catch (err) {
                    formattedPhoneNumber = 'n/a';
                  }
                  return (
                    <tr key={networkEvent.id}>
                      <td>{networkEvent.eventUUID}</td>
                      <td>{regionNames[networkEvent.regionType]}</td>
                      <td>{formattedPhoneNumber}</td>
                      <td>{networkName}</td>
                      <td>{networkEvent.eventMicrotime}</td>
                      <td>{networkEventTypeNames[networkEvent.eventType]}</td>
                      <td>{networkEvent.operationTime}</td>
                      <td>{networkEvent.score}</td>
                      <td>{statusNames[networkEvent.status]}</td>
                      <td>
                        <Button
                          color='warning'
                          onClick={e => this.toggleRequestBodyModal(e, networkEvent)}>
                          show request
                        </Button>{' '}
                        <Button
                          tag={Link}
                          to={`/network/event/${networkEvent.eventUUID}/timeline`}
                          color='success'>
                          View Chain
                        </Button>
                      </td>
                    </tr>
                  );
                },
              )
            ) : (
              <tr>
                <td colSpan={10} className={'text-center'}>
                  No data available...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <NetworkEventRequestBodyModal
          isOpen={requestBodyModal}
          toggle={this.toggleRequestBodyModal}
          data={requestBodyModalData}
        />
      </div>
    );
  };

  render() {
    const {
      match: {
        params: { id: networkId },
      },
    } = this.props;
    const variables = {
      networkId: parseInt(nullthrows(networkId, 'networkId cannot be null')),
    };
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={query}
        variables={variables}
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

  toggleRequestBodyModal = (e: SyntheticEvent<HTMLButtonElement>, networkEvent: any): void => {
    this.setState(prevState => ({
      requestBodyModal: !prevState.requestBodyModal,
      requestBodyModalData: networkEvent,
    }));
  };
}

export default NetworkEvents;
