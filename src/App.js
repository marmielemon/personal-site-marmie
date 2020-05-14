import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./Home";
import About from "./About";
import { brandBgr } from "./Colors";

const StyledBody = styled.div`
  background-image: url("https://drive.google.com/uc?id=1O-1qO_mBvdoWQG45h2HOcHstr6PRsuN-");
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Londrina Solid", cursive;
`;

const App = () => (
  <Router>
    <StyledBody>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
        </Route>
      </Switch>
    </StyledBody>
  </Router>
);

export default App;
