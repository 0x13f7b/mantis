/**
 * @format
 */
const sequelize = require('sequelize');
const conn = require('../Conn');
const NetworkEvents = require('../../constants/NetworkEvents');
const EntNetwork = require('../EntNetwork');
const { NETWORK_METRICS_UPDATED } = require('../../graphql/subscriptions');
const pubsub = require('../../graphql/pubsub');
const updateNetworkMetricsQuery = `
SELECT 
  network_id,
  AVG(operation_time) AS average_operation_time,
  ROUND(AVG(IF(event_type = 600, 0, operation_time))*10) AS availability_score,
  SUM(IF(event_type = 600, 1, 0)) AS total_failures
  FROM network_event
WHERE event_type != $event_type
AND network_id = $network_id
GROUP BY network_id
`;
const updateNetworkMetrics = async entNetworkEvent => {
  const { networkId } = entNetworkEvent;
  const metrics = await conn.query(updateNetworkMetricsQuery, {
    bind: {
      event_type: NetworkEvents.EVENT_UNIX_TIME_PREPARE,
      network_id: networkId,
    },
    type: sequelize.QueryTypes.SELECT,
  });
  if (metrics.length === 0) {
    return;
  }
  const metric = await metrics.shift();
  let {
    average_operation_time: averageOperationTime,
    availability_score: availabilityScore,
    total_failures: failures,
  } = metric;
  const entNetwork = await EntNetwork.findByPk(networkId);
  await entNetwork.update({
    averageOperationTime: averageOperationTime,
    availabilityScore: availabilityScore,
    failures: failures,
  });
  await pubsub.publish(NETWORK_METRICS_UPDATED, { networkMetricsUpdated: entNetwork });
};
module.exports = {
  updateNetworkMetrics,
};
