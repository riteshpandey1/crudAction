import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="vite.svg"  className="logo"/>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};

  .logo{
    height:5rem;
    width:5rem;
  }
`;
export default Header;