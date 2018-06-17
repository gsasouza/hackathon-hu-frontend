import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withFormik } from 'formik';
import * as Yup from "yup";
import RichTextEditor from 'react-rte';

import { Content, TextField, withSnackbar, Button } from '../common';
import ArticleAddMutation from './mutation/ActionAddMutation';

const ActionRichTextEditor = styled(RichTextEditor)`
  min-height: 300px;
  .Button__root___1gz0c {
    border-width: 0px !important;
    background: transparent !important;
  }
  .EditorToolbar__root___3_Aqz {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .public-DraftEditor-content {
    min-height: 250px;
    color: #505b6a;
    justify-content: center;
    font-family: Roboto;
  }
  .RichTextEditor__paragraph___3NTf9 {
    margin: 3px 0;
  }
`;


const ActionSchema = Yup.object().shape({
  title: Yup.string()
    .required('Preencha o campo de título'),
  description: Yup.string()
    .required('Preencha o campo de descrição'),
  unit: Yup.string()
    .required('Preencha o campo de unidade'),
});

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

const DescriptionTitle = styled.p`
  color: #757575;
  font-size: 13px;
  font-weight: 400;
  margin-top: 25px;
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
  handleBack = () => this.props.history.push('/actions');

  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = value => {
    const { setFieldValue } = this.props;
    setFieldValue('description', value.toString('html'));
    this.setState({ value });
  };

  render () {
    const { handleSubmit } = this.props;
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Adicionar Ação
          </Typography>
        </Header>
        <Divider />
        <FormContainer>
          <TextField name={'title'} label={'Título'}{...this.props} />
          <TextField name={'unit'} label={'Categoria'}{...this.props} />
          <DescriptionTitle>Descrição</DescriptionTitle>
          <ActionRichTextEditor
            value={this.state.value}
            onChange={this.onChange}
            readOnly={false}
          />
        </FormContainer>
        <Divider />
        <Actions>
          <Button color="primary" onClick={this.handleBack}>
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
    mapPropsToValues: () => ({ title: '', description: '', unit: '' }),
    validationSchema: ActionSchema,
    handleSubmit: (values, formikBag) => {
      const { setStatus, setSubmitting, props } = formikBag;
      const { title, description, unit } = values;

      const input = {
        title, description, unit
      };

      const onError = () => {
        setStatus({ fail: true, message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = ({ ActionAdd: { error } }) => {
        if (error)
        setStatus({ success: true, message: 'Operação feita com êxito!' });
        setSubmitting(false);
        props.history.push('/actions');
      };

      ArticleAddMutation.commit(input, onCompleted, onError);
    }
  })(ArticleAdd)
);
