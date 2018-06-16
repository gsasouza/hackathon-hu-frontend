import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation SignCancelCodeMutation($input: SignFeedCancelCodeInput!) {
    SignFeedCancelCode(input: $input){
      error
    }
  }
`;

function commit({ email, code }, onCompleted, onError) {
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
