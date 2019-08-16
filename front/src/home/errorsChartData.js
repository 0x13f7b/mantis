/**
 * @flow strict
 * @format
 */

let errorsChartData = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Errors',
  },
  subtitle: {
    text: 'Over a selected period of time',
  },
  xAxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Failures (sum)',
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: 'Twilio',
      data: [0, 1, 1, 0, 0, 0, 0],
    },
    {
      name: 'Nexmo',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: 'Bandwidth',
      data: [0, 0, 21, 0, 0, 0, 0],
    },
  ],
};
export default errorsChartData;
