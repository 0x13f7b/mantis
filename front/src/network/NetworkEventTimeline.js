/**
 * @flow strict
 * @format
 */
import * as React from 'react';
import _ from 'lodash';
import { QueryRenderer, Error } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import { Container, Table, Alert, Spinner, Button } from 'reactstrap';
import nullthrows from 'nullthrows';
import type NetworkEventTimelineQueryResponse from './__generated__/NetworkEventTimelineQuery.graphql';
import NetworkEventRequestBodyModal from './NetworkEventRequestBodyModal';
import NetworkEventTypes from '../constants/NetworkEventTypes';
import Status from '../constants/Status';
import Regions from '../constants/Regions';
import ReactJson from 'react-json-view';
import { PhoneNumberFormat as PNF, PhoneNumberUtil } from 'google-libphonenumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHistory,
  faCoffee,
  faNetworkWired,
  faSync,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import SupportEngStringUtil from '../utils/SupportEngStringUtil';
const { convertSnakeCaseToTitleCase } = SupportEngStringUtil;

const phoneUtil = PhoneNumberUtil.getInstance();
const networkEventTypeNames = _.invert(NetworkEventTypes);
const statusNames = _.invert(Status);
const regionNames = _.invert(Regions);

const { Fragment } = React;

type Props = {|
  match: {
    params: {
      uuid: string,
    },
  },
|};
type State = {||};

const query = graphql`
  query NetworkEventTimelineQuery($eventUUID: String!) {
    networkEventTimeline(eventUUID: $eventUUID) {
      id
      regionDID
      requestId
      operationTime
      eventType
      eventUUID
      eventMicrotime
      score
      status
      requestBody
      createdAt
      network {
        id
        name
        status
      }
    }
  }
`;

class NetworkEventTimeline extends React.Component<Props, State> {
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

  renderSuccess = (props: NetworkEventTimelineQueryResponse): React.Element<'div'> => {
    const { networkEventTimeline: timeLineItems } = props;
    const uuid = timeLineItems[0].eventUUID;
    return (
      <Container>
        <hr />
        <h3>Event timeline</h3>
        <span>Event UUID: {uuid}</span>
        <ul className='timeline'>
          {timeLineItems.map(item => {
            const { createdAt, eventMicrotime, eventType, requestBody } = item;
            const jsonBody = requestBody && requestBody.body ? requestBody.body : {};
            return (
              <li>
                <div className='timeline-badge success'>
                  <FontAwesomeIcon icon={this.renderTimelineItemIcon(eventType)} />
                </div>
                <div className='timeline-panel'>
                  <div className='timeline-heading'>
                    <h4 className='timeline-title'>
                      {convertSnakeCaseToTitleCase(networkEventTypeNames[item.eventType])}
                    </h4>
                    <p>
                      <small className='text-muted'>
                        <FontAwesomeIcon icon={faHistory} /> {item.eventMicrotime}
                      </small>
                    </p>
                  </div>
                  <div className='timeline-body'>
                    <div>{`${item.id}:${item.eventUUID}`}</div>
                    <ReactJson src={jsonBody} collapsed={true} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <hr />
      </Container>
    );
  };

  render() {
    const {
      match: {
        params: { uuid: eventUUID },
      },
    } = this.props;
    const variables = { eventUUID };
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

  renderTimelineItemIcon(eventType: $Keys<typeof NetworkEventTypes>) {
    switch (eventType) {
      case NetworkEventTypes.EVENT_UNIX_TIME_PREPARE:
        return faCoffee;
      case NetworkEventTypes.EVENT_UNIX_TIME_API_CALL:
        return faNetworkWired;
      case NetworkEventTypes.EVENT_UNIX_TIME_STATUS_CALLBACK:
        return faSync;
      case NetworkEventTypes.EVENT_UNIX_TIME_GENERAL_FAILURE:
        return faExclamation;
      default:
        return faCoffee;
    }
  }
}

export default NetworkEventTimeline;
