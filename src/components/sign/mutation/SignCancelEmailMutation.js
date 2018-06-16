import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation SignCancelEmailMutation($input: SignFeedCancelInput!) {
    SignFeedCancel(input: $input){
      email
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
