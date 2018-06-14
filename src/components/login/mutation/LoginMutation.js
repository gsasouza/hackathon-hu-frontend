import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation LoginMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input){
      token
      error
    }
  }
`;

function commit({ email, password }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        email,
        password
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
