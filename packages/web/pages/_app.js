import App from 'next/app'
import { ApolloProvider } from 'react-apollo'

import withData from '../src/lib/withData'
import Page from '../src/components/Page'

class Wrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (ctx && pageProps) {
      // This exposes query to the user
      pageProps.query = ctx?.query
      pageProps.pathname = ctx.pathname
    }

    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props
    return (
      // <Container>
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
      // </Container>
    )
  }
}

export default withData(Wrapper)
