import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import Login from "./containers/Login";
import Register from "./containers/Register";
import {history} from "./history";
import MainBody from "./components/MainBody";
import ProductDetails from "./components/ProductDetails";
import Layout1 from "./components/Layout1";
import FloatCart from "./components/FloatCart";

class App extends Component {
    render() {
        return (

           <Router history={history}>
               <Layout1>
                       <Switch>
                       <Route exact path="/" component={MainBody} />
                       <Route path="/login" component={Login} />
                       <Route path='/signup' component={Register} />
                       <Route exact path="/product/:id" component={ProductDetails} />
                       </Switch>
               </Layout1>
               <FloatCart/>
           </Router>
        );
    }
}

export default App;
