import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { brandSecondary } from "./Colors";

//const StyledScroll = styled.div`
//  width: 470px;
//  height: 480px;
//  overflow-x: scroll;
//  overflow-y: hidden;
//`;

const StyledParent = styled.div`
  display: flex;
`;

const StyledBubble1 = styled.div`
  border-radius: 50%;
  background-image: url("https://drive.google.com/uc?id=1dmNOwpsqwl9syG3rMk0H0gkOaYkbpEyY");
  background-size: contain;
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: absolute;
  left: 250px;
  top: 70px;
`;

const StyledBubble2 = styled.div`
  border-radius: 50%;
  background-image: url("https://drive.google.com/uc?id=1RbkHg5vxj7EdFTwUM0y991WTdM3nqUDt");
  background-size: contain;
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 1px solid grey;
  position: absolute;
  left: 250px;
  top: 270px;
`;

const StyledBubble3 = styled.div`
  border-radius: 50%;
  background-image: url("https://picsum.photos/210");
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: absolute;
  left: 500px;
  top: 70px;
`;

const StyledBubble4 = styled.div`
  border-radius: 50%;
  background-image: url("https://picsum.photos/211");
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: absolute;
  left: 500px;
  top: 270px;
`;

const StyledBubble5 = styled.div`
  border-radius: 50%;
  background-image: url("https://picsum.photos/213");
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: absolute;
  left: 750px;
  top: 70px;
`;

const StyledBubble6 = styled.div`
  border-radius: 50%;
  background-image: url("https://picsum.photos/215");
  padding: 40px;
  width: 90px;
  height: 90px;
  border: 2px solid grey;
  position: absolute;
  left: 750px;
  top: 270px;
`;

const Home = () => (
  <StyledParent>
    <StyledBubble1>
      <Link to="/about">About</Link>
    </StyledBubble1>
    <StyledBubble2>
      <p> &nbsp;</p>
    </StyledBubble2>
    <StyledBubble3>
      <Link to="/work">Work</Link>
    </StyledBubble3>
    <StyledBubble4>
      <a href="mailto:marmielemon@gmail.com?subject=Contact%20Form">Email </a>
    </StyledBubble4>
    <StyledBubble5>
      <p> &nbsp;</p>
    </StyledBubble5>
    <StyledBubble6>
      <p> &nbsp;</p>
    </StyledBubble6>
  </StyledParent>
);

export default Home;
