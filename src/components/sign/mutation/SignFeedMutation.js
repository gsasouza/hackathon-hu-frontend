import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation SignFeedMutation($input: SignFeedInput!) {
    SignFeed(input: $input){
      error
    }
  }
`;

function commit({ email }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        email,
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
