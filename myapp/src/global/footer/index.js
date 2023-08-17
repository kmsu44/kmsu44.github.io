import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.button`
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  );
};
