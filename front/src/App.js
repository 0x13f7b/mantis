/**
 * @flow strict
 * @format
 */
import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-browser-router';
import networkMetricsUpdatedSubscription from './subscription/networkMetricsUpdated';
import type networkMetricsUpdatedSubscriptionResponse from './subscription/__generated__/networkMetricsUpdatedSubscription.graphql';
import { ToastContainer, toast } from 'react-toastify';
import Tour from 'reactour';
import MenuBar from './common/MenuBar';
import Home from './home/Home';
import Login from './home/Login';
import CreateUser from './home/CreateUser';
import User from './user/User';
import UserList from './user/UserList';
import Network from './network/Network';
import NetworkEvents from './network/NetworkEvents';
import NetworkEventTimeline from './network/NetworkEventTimeline';
import UserSettings from './user_settings/UserSettings';
import UserSettingEdit from './user_settings/UserSettingEdit';

const { Fragment } = React;

type Props = {||};
type State = {|
  loggedIn: boolean,
  apiToken?: ?string,
  tourActive: boolean,
  tourStep: number,
|};

const tourStepts = [
  {
    selector: '.settings-page-step',
    content: `Let's go to settings page so you can connect your networks which will be managed by mantis.`,
  },
];
class App extends React.Component<Props, State> {
  state = {
    loggedIn: false,
    apiToken: null,
    tourActive: false,
    tourStep: 1,
  };

  componentDidMount() {
    const apiToken = localStorage.getItem('apiToken');
    //const { toastManager } = this.props;
    if (apiToken) {
      this.setState({ loggedIn: true, apiToken });
    }

    networkMetricsUpdatedSubscription(
      (response: networkMetricsUpdatedSubscriptionResponse): void => {
        const {
          networkMetricsUpdated: { availabilityScore, averageOperationTime, failures, name },
        } = response;
        const text = `${name} network updated (S:${availabilityScore},A:${averageOperationTime},F:${failures})`;
        toast.info(text, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      },
    );
  }

  onRequestClose = () => {
    this.setState({
      tourActive: false,
    });
  };

  render(): React.Element<typeof BrowserRouter> {
    const { loggedIn } = this.state;
    return loggedIn ? (
      <BrowserRouter>
        <Route
          path='/'
          render={() => (
            <Fragment>
              <Tour
                steps={tourStepts}
                isOpen={this.state.tourActive}
                onRequestClose={this.onRequestClose}
              />
              <MenuBar loggedIn={loggedIn} />
              <ToastContainer autoClose={2500} />
              <Row>
                <Col md={12}>
                  <Switch>
                    <Route path={`/`} component={Home} exact={true} />
                    <Route path={`/user`} component={User} exact={true} />
                    <Route path={`/user/list`} component={UserList} />
                    <Route path={`/user/settings`} component={UserSettings} exact={true} />
                    <Route path={`/user/settings/edit/:id?`} component={UserSettingEdit} />
                    <Route path={`/network`} component={Network} exact={true} />
                    <Route path={`/network/:id/events`} component={NetworkEvents} exact={true} />
                    <Route
                      path={`/network/event/:uuid/timeline`}
                      component={NetworkEventTimeline}
                      exact={true}
                    />
                  </Switch>
                </Col>
              </Row>
            </Fragment>
          )}
        />
      </BrowserRouter>
    ) : (
      <BrowserRouter>
        <Switch>
          <Route path={`/signup`} component={CreateUser} exact={true} />
          <Route path={`*`} component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
