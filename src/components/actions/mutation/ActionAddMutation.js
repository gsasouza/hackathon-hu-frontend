import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation ActionAddMutation($input: ActionAddInput!) {
    ActionAdd(input: $input){
      action {
        title
        description
        unit
      }
      error
    }
  }
`;

function commit({ title, description, unit }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        title,
        description,
        unit,
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
