import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import { withFormik } from 'formik';
import { object, string } from 'yup'

import { TextField } from '../common';
import SignUpMutation from './mutations/SignUpMutation';

const SignUpSchema = object().shape({
  name: string().required(),
  password: string().required,
});

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledCard = styled(Card)`
  width: 600px;
  height: 430px;
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

class SignUp extends React.Component {

  handleLogin = () => this.props.history.push('/auth');

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledCard>
        <CardHeader
          title={'Cadastro'}
        />
        <Content>
          <FormContainer>
            <TextField name={'name'} label={'Nome'}{...this.props} />
            <TextField name={'university'} label={'Instituição'}{...this.props} />
            <TextField name={'email'} label={'Email'}{...this.props} />
            <TextField name={'password'} label={'Senha'} {...this.props} />
          </FormContainer>
        </Content>
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleLogin}>
            Entrar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Finalizar
          </Button>
        </Actions>
      </StyledCard>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', university: '', name: '' }),
  handleSubmit: (values, formikBag) => {
    const { setStatus, setSubmitting, props } = formikBag;
    const { name, university, password, email } = values;

    const input = {
      name,
      university,
      password,
      email
    };

    const onError = () => {
      setStatus({ fail: true, message: 'Ocorreu um erro ao realizar a operação' });
      setSubmitting(false);
    };

    const onCompleted = () => {
      setStatus({ success: true, message: 'Operação feita com êxito!' });
      setSubmitting(false);
    };

    SignUpMutation.commit(input, onCompleted, onError);
  }
})(SignUp)