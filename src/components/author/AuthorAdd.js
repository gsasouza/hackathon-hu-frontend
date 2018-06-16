import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withFormik } from 'formik';

import { Content, TextField, withSnackbar } from '../common';
import AuthorAddMutation from './mutation/AuthorAddMutation';
import * as Yup from "yup";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 20px 0;
  margin-left: -20px;
  button {
    margin: 5px;
  }
`;

const AuthorAddSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-email válido')
    .required('Preencha o campo de e-mail'),
  unit: Yup.string()
    .required('Preencha o campo de unidade'),
  name: Yup.string()
    .required('Preencha o campo de nome'),
});


class AuthorAdd extends React.Component{
  handleBack = () => this.props.history.push('/authors');
  render () {
    const { handleSubmit } = this.props;
    console.log(this.props.errors)
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Adicionar Pesquisador
          </Typography>
        </Header>
        <Divider />
        <FormContainer>
          <TextField name={'name'} label={'Nome Completo'}{...this.props} />
          <TextField name={'email'} label={'E-mail'} {...this.props} />
          <TextField name={'unit'} label={'Unidade'} {...this.props} />
        </FormContainer>
        <Divider />
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleBack}>
            Voltar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!!Object.keys(this.props.errors).length}>
            Adicionar
          </Button>
        </Actions>
      </Content>
    )
  }
}


export default withSnackbar(
  withFormik({
    mapPropsToValues: () => ({ email: '', unit: '', name: '' }),
    validationSchema: AuthorAddSchema ,
    handleSubmit: (values, formikBag) => {

      const { setSubmitting, props } = formikBag;
      const { name, email, unit } = values;

      const input = {
        name, email, unit
      };

      const onError = () => {
        props.showSnackbar({ message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = ({ AuthorAdd: { error }}) => {
        if (error) return props.showSnackbar({ message: error });
        props.showSnackbar({ message: 'Pesquisador criado com sucesso' });
        setSubmitting(false);
        props.history.push(`/authors`);
      };

      AuthorAddMutation.commit(input, onCompleted, onError);
    }
  })(AuthorAdd)
);
