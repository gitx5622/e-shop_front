import React, {Component} from 'react';
import {Router, Switch, Route } from "react-router-dom";
import Layout1 from "./components/Layout1";
import {history} from "./history";
import Login from "./containers/Login";
import MainBody from "./components/MainBody";
import Register from "./containers/Register";

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Layout1>
            <Switch>
                <Route exact path="/" component={MainBody} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
            </Layout1>
        </Router>
    );
  }
}

export default App;