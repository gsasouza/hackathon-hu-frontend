import { Config, InMemoryCache, Link } from 'react-releasy';

const link = new Link({
  url: 'https://yourserveraddress.com/graphql',
});

const cache = new InMemoryCache();

export default new Config({
  link,
  cache,
});
