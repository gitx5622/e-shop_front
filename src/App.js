import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import Login from "./containers/Login";
import Register from "./containers/Register";
import {history} from "./history";
import MainBody from "./components/MainBody";
import ProductDetails from "./components/ProductDetails";
import Layout1 from "./components/Layout1";
import FloatCart from "./components/FloatCart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

class App extends Component {
    render() {
        return (

           <Router history={history}>
               <Layout1>
                       <Switch>
                       <Route exact path="/" component={MainBody} />
                       <Route path="/login" component={Login} />
                       <Route path='/register' component={Register} />
                       <Route exact path="/product/:id" component={ProductDetails} />
                       <Route exact path="/checkout" component={Checkout} />
                       <Route exact path="/payment" component={Payment} />
                       </Switch>
               </Layout1>
               <FloatCart/>
           </Router>
        );
    }
}

export default App;
