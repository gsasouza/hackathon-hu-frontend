import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import { TextField, withSnackbar } from '../../common';
import SignCancelEmail from '../mutation/SignCancelEmailMutation';

const SignSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-email válido')
    .required('Preencha o campo de e-mail'),
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

class SignCancel extends React.Component {

  handleSignUp = () => this.props.history.push('/sign');

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledCard>
        <CardHeader
          title={'Cancelar assinatura do feed'}
        />
        <Content>
          <FormContainer>
            <TextField name={'email'} label={'Email'}{...this.props} />
          </FormContainer>
        </Content>
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleSignUp}>
            Voltar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Cancelar Assinatura
          </Button>
        </Actions>
      </StyledCard>
    )
  }
}


export default withSnackbar(
  withFormik({
    mapPropsToValues: () => ({ email: ''}),
    validationSchema: SignSchema,
    handleSubmit: (values, formikBag) => {
      const { setSubmitting, props } = formikBag;

      const { email } = values;
      console.log(props)

      const input = {
        email
      };

      const onError = () => {

        props.showSnackbar({ message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = ({ SignFeedCancel: { email, error }}) => {
        if (error) return props.showSnackbar({ message: error });
        props.showSnackbar({ message: 'Um código de cancelmento foi enviado para o seu e-mail' });
        setSubmitting(false);
        props.history.push(`/sign/cancel/${email}/code`);
      };

      SignCancelEmail.commit(input, onCompleted, onError);
    }
  })(SignCancel));
