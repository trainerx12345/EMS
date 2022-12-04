import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import IndexLayout from "layouts/Index.js";
import AuthLayout from "layouts/Auth.js";
import StudentLayout from "layouts/Student";
import Terms from "../src/views/examples/Terms";

//import redux
import { Provider } from "react-redux";
import store from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const userType = localStorage.getItem("userType");

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route
          path="/student"
          render={(props) => <StudentLayout {...props} />}
        />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/terms" render={(props) => <Terms {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/" render={(props) => <IndexLayout {...props} />} />
        <Redirect from="/" to="/" />
      </Switch>
    </Provider>
  </BrowserRouter>
);
