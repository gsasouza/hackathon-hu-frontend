import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation ArticleAddMutation($input: ArticleAddInput!) {
    ArticleAdd(input: $input){
      article {
        title
        description
        category
      }
      error
    }
  }
`;

function commit({ title, description, category }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        title,
        description,
        category,
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
