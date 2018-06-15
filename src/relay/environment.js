import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { GRAPHQL_URL } from '../config';
import { getAccessToken } from '../security/security';

const fetchQuery = async (operation, variables, cacheConfig, uploadables) => {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return await response.json();
};


const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
