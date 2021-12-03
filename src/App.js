import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.js";
import StepForm from "./components/Stepper/StepForm";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stepForm">
          <StepForm />
        </Route>
      </Switch>
    </Router>
  );
}
