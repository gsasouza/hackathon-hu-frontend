import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withFormik } from 'formik';

import { Content, TextField } from '../common';
import ArticleAddMutation from './mutation/ArticleAddMutation';


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

class ArticleAdd extends React.Component{
  handleBack = () => this.props.history.push('/articles');
  render () {
    const { handleSubmit } = this.props;
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Adicionar Pesquisa
          </Typography>
        </Header>
        <Divider />
        <FormContainer>
          <TextField name={'title'} label={'Título'}{...this.props} />
          <TextField name={'description'} label={'Descrição'} multiline={true} rows={10} rowsMax={15} {...this.props} />
          <TextField name={'category'} label={'Categoria'}{...this.props} />
        </FormContainer>
        <Divider />
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleBack}>
            Voltar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Adicionar
          </Button>
        </Actions>
      </Content>
    )
  }
}


export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  // validationSchema: LoginSchema,
  handleSubmit: (values, formikBag) => {
    const { setStatus, setSubmitting, props } = formikBag;
    const { title, description, category } = values;

    const input = {
      title, description, category
    };

    const onError = () => {
      setStatus({ fail: true, message: 'Ocorreu um erro ao realizar a operação' });
      setSubmitting(false);
    };

    const onCompleted = () => {
      setStatus({ success: true, message: 'Operação feita com êxito!' });
      setSubmitting(false);
      props.history.push('/articles');
    };

    ArticleAddMutation.commit(input, onCompleted, onError);
  }
})(ArticleAdd);
