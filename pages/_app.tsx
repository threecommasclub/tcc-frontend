import '../styles/tailwind.css';

import React from 'react';
import App, { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApolloClient from '../lib/with-apollo-client';

// eslint-disable-next-line
type MyAppProps = AppProps & { apolloClient: any };

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
