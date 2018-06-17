import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  p {
    display: flex;
    justify-content: center;
  }  
`;

export default ({ description }) => (
  <Wrapper>
    <ReactMarkdown escapeHtml={false} source={description} />
  </Wrapper>
)

