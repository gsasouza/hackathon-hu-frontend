import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation SignUpMutation($input: RegisterEmailInput!) {
    RegisterEmail(input: $input){
        token
        error
    }
  }
`;

function commit({ email, name, university, password }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        email,
        name,
        university,
        password
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
