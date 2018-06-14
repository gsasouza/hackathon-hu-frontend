import { graphql, commitMutation } from 'react-relay';
import { getEnvironment } from 'react-releasy';

const environment = getEnvironment();

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
