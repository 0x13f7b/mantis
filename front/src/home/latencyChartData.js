/**
 * @flow strict
 * @format
 */

let latencyChartData = {
  title: {
    text: 'Network Latency',
  },
  subtitle: {
    text: 'Over a selected period of time',
  },
  yAxis: {
    title: {
      text: 'msec',
    },
  },
  xAxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },
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
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
};
export default latencyChartData;
