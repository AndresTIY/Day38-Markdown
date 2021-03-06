import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Confirm from "./components/confirm.js";
import Markdown from "./components/markdown_preview.js";

const FooBar = () => <div>Hi</div>;

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppRoot} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/markdown" component={Markdown} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
