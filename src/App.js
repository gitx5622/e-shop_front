import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import Login from "./containers/Login";
import Register from "./containers/Register";
import {history} from "./history";
import MainBody from "./components/MainBody";
import ProductDetails from "./components/ProductDetails";
import Layout1 from "./components/Layout1";



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
           </Router>


        );
    }
}

export default App;
