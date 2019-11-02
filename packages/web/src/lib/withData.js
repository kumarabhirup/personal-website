import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

function createClient({ headers }) {
  return new ApolloClient({
    uri:
      process.env.NODE_ENV !== 'production'
        ? `${process.env.KUMAR_BACKEND_URL}/api/graphql`
        : `/api/graphql`,
    request: operation => {
      operation.setContext({
        headers,
      })
    },
  })
}

export default withApollo(createClient)
