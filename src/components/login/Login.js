import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import { TextField } from '../common';
import LoginMutation from './mutation/LoginMutation';
import { login } from '../../security/security';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-email válido')
    .required('Preencha o campo de e-mail'),
  password: Yup.string()
    .min(6, 'A senha deve ter no minímo 6 caracteres')
    .required('Preencha o campo de senha'),
});

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px
`;

const StyledCard = styled(Card)`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Content = styled(CardContent)`
  width: 100%;
  height: 100%
`;

const Actions = styled(CardActions)`
  align-self: flex-end;
  margin: 10px;
`;

class Login extends React.Component {

  handleSignUp = () => this.props.history.push('/auth/signup');

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledCard>
        <CardHeader
          title={'Login'}
        />
        <Content>
          <FormContainer>
            <TextField name={'email'} label={'Email'}{...this.props} />
            <TextField name={'password'} label={'Senha'} {...this.props} />
          </FormContainer>
        </Content>
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleSignUp}>
            Cadastrar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Entrar
          </Button>
        </Actions>
      </StyledCard>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  // validationSchema: LoginSchema,
  handleSubmit: (values, formikBag) => {
    const { setStatus, setSubmitting, props } = formikBag;
    const { password, email } = values;

    const input = {
      password,
      email
    };

    const onError = () => {
      setStatus({ fail: true, message: 'Ocorreu um erro ao realizar a operação' });
      setSubmitting(false);
    };

    const onCompleted = ({ LoginEmail: { token } }) => {
      setStatus({ success: true, message: 'Operação feita com êxito!' });
      login(token);
      setSubmitting(false);
      props.history.push('/');
    };

    LoginMutation.commit(input, onCompleted, onError);
  }
})(Login);
