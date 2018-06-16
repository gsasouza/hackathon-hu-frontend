import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import { TextField, withSnackbar } from '../common';
import SignFeedMutation from './mutation/SignFeedMutation';

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

class Sign extends React.Component {

  handleCancel = () => this.props.history.push('/sign/cancel');

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledCard>
        <CardHeader
          title={'Assinar Feed'}
        />
        <Content>
          <FormContainer>
            <TextField name={'email'} label={'Email'}{...this.props} />
          </FormContainer>
        </Content>
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleCancel}>
            Cancelar Assinatura
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Assinar
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

      const input = {
        email
      };

      const onError = () => {
        props.showSnackbar({ message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = () => {
        props.showSnackbar({ message: 'Operação feita com êxito!' });
        setSubmitting(false);
      };

      SignFeedMutation.commit(input, onCompleted, onError);
    }
  })(Sign)
);
