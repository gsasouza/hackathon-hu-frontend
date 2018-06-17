import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 20px;
  font-size: 32px;
`;

export default ({ abstract }) => (
  <Wrapper>
    {abstract}
  </Wrapper>
)

