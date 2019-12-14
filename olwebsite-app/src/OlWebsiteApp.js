import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style-sheets/main.scss";

import Header from "./components/Toolbar";
import Footer from "./components/Footer";
import LandingView from "./pages/LandingView";

export default function OlWebsiteApp() {
  /************************************
   * Render
   ************************************/

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="app-body">
          <Switch>
            <Route path="/" component={LandingView} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
