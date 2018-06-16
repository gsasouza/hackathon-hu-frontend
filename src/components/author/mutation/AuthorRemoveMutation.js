import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation AuthorRemoveMutation($input: AuthorRemoveInput!) {
    AuthorRemove(input: $input){     
      error
    }
  }
`;

function commit({ id }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        id
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
