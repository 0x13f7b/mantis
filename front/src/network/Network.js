/**
 * @flow strict
 * @format
 */
import * as React from 'react';
import { QueryRenderer, Error } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import { Table, Alert, Spinner, Button } from 'reactstrap';
import { Link } from 'react-browser-router';
import type NetworkQueryResponse from './__generated__/NetworkQuery.graphql';

type Props = {||};
type State = {||};

const query = graphql`
  query NetworkQuery {
    networks {
      id
      name
      overallScore
      availabilityScore
      averageOperationTime
      failures
      lowestBandwidth
      averageBandwidth
      highestBandwidth
      priority
      status
      events {
        id
      }
      updatedAt
    }
  }
`;

class Network extends React.Component<Props, State> {
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

  renderSuccess = (props: NetworkQueryResponse): React.Element<'div'> => {
    const { networks = [] } = props;
    return (
      <div className={`table-responsive`}>
        <Table>
          <thead className={`thead-dark`}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Overall Score</th>
              <th>Availability Score</th>
              <th>Avg Operation Time</th>
              <th>Failures</th>
              <th>Priority</th>
              <th>Lowest Bandwidth</th>
              <th>Average Bandwidth</th>
              <th>Highest Bandwidth</th>
              <th>Status</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {networks ? (
              networks.map(
                (network): React.Element<'tr'> => {
                  const { events } = network;
                  return (
                    <tr key={network.id}>
                      <td>{network.id}</td>
                      <td>{network.name}</td>
                      <td>{network.overallScore}</td>
                      <td>{network.availabilityScore}</td>
                      <td>{network.averageOperationTime}</td>
                      <td>{network.failures}</td>
                      <td>{network.priority}</td>
                      <td>{network.lowestBandwidth} kBits/sec</td>
                      <td>{network.averageBandwidth} kBits/sec</td>
                      <td>{network.highestBandwidth} kBits/sec</td>
                      <td>{network.status}</td>
                      <td>{network.updatedAt}</td>
                      <td>
                        {events.length > 0 && (
                          <Button tag={Link} to={`/network/${network.id}/events`} color='warning'>
                            view events
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                },
              )
            ) : (
              <tr>
                <td colSpan={12} className={'text-center'}>
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
        variables={{}}
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

export default Network;
