import React from "react";
import ReactDOM from "react-dom";
import OlWebsiteApp from "./OlWebsiteApp.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OlWebsiteApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});