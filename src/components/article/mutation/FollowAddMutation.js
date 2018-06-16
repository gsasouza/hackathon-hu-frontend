import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation FollowAddMutation($input: FollowAddInput!) {
    FollowAdd(input: $input){
      error
    }
  }
`;

function commit({ articleId }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        articleId,
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
