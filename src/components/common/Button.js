import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(ButtonMUI)`
  ${p => console.log(p)}
  ${p => p.color === 'primary' && p.variant === 'contained' ? 'background-color: rgb(74, 141, 119) !important;': ''}
  min-width: 150px !important;
`;

export default (props) => <StyledButton {...props} />
