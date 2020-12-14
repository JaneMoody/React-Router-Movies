import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

// You'll need to wrap <App /> for routing to work

ReactDOM.render(
  <Router>
    <App />
  </Router>
);
ReactDOM.render(<App />, document.getElementById("root"));
{
  /* <Route path="/users" component={Users} />; */
}
