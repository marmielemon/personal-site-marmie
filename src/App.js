import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Home from "./Home";
import About from "./About";
import { brandBgr } from "./Colors";

const StyledBody = styled.div`
  background-image: linear-gradient(to bottom left, whitesmoke, ${brandBgr});
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
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </StyledBody>
  </Router>
);

export default App;
