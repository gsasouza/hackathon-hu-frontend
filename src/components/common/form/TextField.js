import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  width: 100%;
`;

export default (props) => {
  const { name, touched, errors, handleChange, handleBlur, values, label, fullWidth = true } = props;
  return (
    <Wrapper>
      <TextField
        type={name}
        fullWidth={fullWidth}
        label={label}
        id={name}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!touched[name] && !!errors[name]}
        helperText={errors[name] && !!touched[name] ? errors[name] : props.helperText}
      />
    </Wrapper>
  )
}
