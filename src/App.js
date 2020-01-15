import React, {Component} from 'react';
<<<<<<< HEAD
import {Router, Switch, Route} from 'react-router-dom'
=======
import {Route, Router, Switch} from 'react-router-dom'
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
import Login from "./containers/Login";
import Register from "./containers/Register";
import {history} from "./history";
import MainBody from "./components/MainBody";
import ProductDetails from "./components/ProductDetails";
import Layout1 from "./components/Layout1";

<<<<<<< HEAD

=======
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702

class App extends Component {
    render() {
        return (

<<<<<<< HEAD
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
=======
            <Router history={history}>
                <Layout1>
                    <Switch>
                        <Route exact path="/" component={MainBody}/>
                        <Route path="/login" component={Login}/>
                        <Route path='/signup' component={Register}/>
                        <Route exact path="/product/:id" component={ProductDetails}/>
                    </Switch>
                </Layout1>
            </Router>
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702


        );
    }
}

export default App;
