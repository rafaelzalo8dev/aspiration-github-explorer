import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, ApolloProvider}  from '@apollo/client';
import config from './config';
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql'
});
const authLink = new ApolloLink((operation, forward) => {
  const token = config.GITHUB_API_KEY;
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
