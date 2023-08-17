import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Headercontinaer = styled.button`
  width: 100%;
  height: 50px;
  color: black;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Menu = styled.button`
  width: 100%;
  height: 50px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  /* 좀 멋있게 해줘 */
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Header = () => {
  return (
    <Headercontinaer>
      <Link to="/">
        <Menu>Home</Menu>
      </Link>
      <Link to="/page2">
        <Menu>Page2</Menu>
      </Link>
      <Link to="/page3">
        <Menu>Page3</Menu>
      </Link>
    </Headercontinaer>
  );
};
