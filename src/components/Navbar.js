import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  padding: 10px;
  background-color: rgba(204, 193, 171, 0.5);
  color: white;
  position: sticky;
  width: 100%;
  margin-bottom: 5px;
`;

const Navbar = props => (
  <StyledNavbar>
    <div>
      <Link to="/home">home</Link>
    </div>
    <div>
      <a href="mailto:marmielemon@gmail.com?subject=Contact%20Form">email </a>
    </div>
  </StyledNavbar>
);

export default Navbar;
