import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { brandSecondary } from "./Colors";

const StyledBubble1 = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom right,
    ${brandSecondary},
    #c1c4c7
  );
  padding: 50px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: relative;
  left: 150px;
  top: 70px;
`;

const StyledBubble2 = styled.div`
  border-radius: 50%;
  background-image: url("https://drive.google.com/uc?id=1RbkHg5vxj7EdFTwUM0y991WTdM3nqUDt");
  background-size: contain;
  padding: 100px;
  width: 300px;
  height: 300px;
  border: 1px solid grey;
  position: relative;
  right: 20px;
  bottom: 30px;
`;

const StyledBubble3 = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom right,
    ${brandSecondary},
    #c1c4c7
  );
  padding: 30px;
  width: 72px;
  height: 72px;
  border: 2px solid grey;
  position: relative;
  right: 180px;
  bottom: 110px;
`;

const StyledBubble4 = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom right,
    ${brandSecondary},
    #c1c4c7
  );
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: relative;
  left: 80px;
  bottom: 120px;
`;

const Home = () => (
  <>
    <StyledBubble1>
      <Link to="/about">About</Link>
    </StyledBubble1>
    <StyledBubble2>
      <a href="mailto:marmielemon@gmail.com?subject=Contact%20Form"> </a>
    </StyledBubble2>
    <StyledBubble3>
      <Link to="/media">Media</Link>
    </StyledBubble3>
    <StyledBubble4>
      <a href="mailto:marmielemon@gmail.com?subject=Contact%20Form">Email </a>
    </StyledBubble4>
  </>
);

export default Home;
