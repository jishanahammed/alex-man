import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import StepForm from "./components/Stepper/StepForm";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StepForm />
        </Route>
        {/* <Route path="/stepForm">
          <StepForm />
        </Route> */}
      </Switch>
    </Router>
  );
}
