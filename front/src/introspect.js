/**
 * @format
 */
const fetch = require('node-fetch');
const { HttpLink } = require('apollo-link-http');
const { introspectSchema } = require('graphql-tools');
const { print } = require('graphql');

const fetcher = async ({ query: queryDocument, variables, operationName, context }) => {
  const query = print(queryDocument);
  const fetchResult = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables, operationName }),
  });
  return fetchResult.json();
};

introspectSchema(fetcher).then(schema => {
  console.log(schema);
});
