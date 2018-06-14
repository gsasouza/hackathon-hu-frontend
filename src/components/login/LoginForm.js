import React from 'react';
import { withFormik } from 'formik';
import { object, string } from 'yup'
import styled from 'styled-components';

import { TextField } from '../common';

const LoginSchema = object().shape({
  name: string().required(),
  password: string().required,
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px
`;

const LoginForm = (props) => (
  <Wrapper>
    <TextField name={'email'} label={'Email'}{...props} />
    <TextField name={'password'} label={'Senha'} {...props} />
  </Wrapper>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, formikBag) => console.log(values)
})(LoginForm)

