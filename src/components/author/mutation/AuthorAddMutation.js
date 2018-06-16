import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation AuthorAddMutation($input: AuthorAddInput!) {
    AuthorAdd(input: $input){
      article {
        name
        unit
        email
      }
      error
    }
  }
`;

function commit({ name, email, unit }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        email,
        unit,
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
