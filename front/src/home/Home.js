/**
 * @flow strict
 * @format
 */
import * as React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Error } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { Alert, Spinner, Row, Col, Input } from 'reactstrap';
import type HomeQueryResponse from './__generated__/HomeQuery.graphql';
import latencyChartData from './latencyChartData';
import errorsChartData from './errorsChartData';
const { Fragment } = React;

type State = {|
  dataType?: ?number,
|};
type Props = {||};

const weekData = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: 'Twilio',
      data: [
        0.9549509882926941,
        0.6442513465881348,
        0.6423000494639078,
        0.6523622671763102,
        0.7873694896697998,
        0.6301399866739908,
        0.6021527449289957,
      ],
    },
    {
      name: 'Nexmo',
      data: [
        0.9147350788116455,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
      ],
    },
    {
      name: 'Bandwidth',
      data: [
        0.7566355466842651,
        0.7553335428237915,
        0.8275505304336548,
        0.7693219184875488,
        0.610968271891276,
        0.6405583222707113,
        0.5547513961791992,
      ],
    },
  ],
};

const dayData = {
  categories: [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ],
  series: [
    {
      name: 'Twilio',
      data: [
        0.9549509882926941,
        0.6442513465881348,
        0.6423000494639078,
        0.6523622671763102,
        0.7873694896697998,
        0.6301399866739908,
        0.6021527449289957,
        0.9147350788116455,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
        0.9147350788116455,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
        0.7970994710922241,
        0.6301399866739908,
        0.9549509882926941,
      ],
    },
    {
      name: 'Nexmo',
      data: [
        0.9147350788116455,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
        0.9147350788116455,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
        0.9147350788116455,
      ],
    },
    {
      name: 'Bandwidth',
      data: [
        0.7566355466842651,
        0.7553335428237915,
        0.8275505304336548,
        0.7693219184875488,
        0.610968271891276,
        0.6405583222707113,
        0.5547513961791992,
        1.481971502304077,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        9147350788116455,
        0.7970994710922241,
        0.7197405099868774,
        0.7707959413528442,
        0.6908589998881022,
        0.5754302342732748,
        1.481971502304077,
        0.9147350788116455,
        0.7970994710922241,
      ],
    },
  ],
};

const minuteData = {};

const query = graphql`
  query HomeQuery {
    networkAvailabilityReport {
      networkId
      networkName
      averageOperationTime
      dayOfWeek
    }
  }
`;
class Home extends React.Component<State, Props> {
  state = {
    dataType: 1,
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

  handlePeriodChange = event => {
    const type = event.target.value;
    this.setState({
      dataType: parseInt(type),
    });
    console.log(this.state);
  };

  render() {
    if (this.state.dataType == 1) {
      latencyChartData.series = weekData.series;
      latencyChartData.xAxis.categories = weekData.categories;
    } else {
      latencyChartData.series = dayData.series;
      latencyChartData.xAxis.categories = dayData.categories;
    }
    
    return (
      <>
        <Row>
          <Col md={2}>
            <br />
            <Input
              type='select'
              name='latencyPeriod'
              id='latencyPeriod'
              style={{ marginLeft: '20px' }}
              onChange={this.handlePeriodChange}
              value={this.state.dataType}>
              <option value={1}>Week</option>
              <option value={2}>Day</option>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <HighchartsReact highcharts={Highcharts} options={latencyChartData} />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <br />
            <Input
              type='select'
              name='errorsPeriod'
              id='errorsPeriod'
              style={{ marginLeft: '20px' }}
              onChange={this.handlePeriodChange}
              value={this.state.dataType}>
              <option value={1}>Week</option>
              <option value={2}>Day</option>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <HighchartsReact highcharts={Highcharts} options={errorsChartData} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
