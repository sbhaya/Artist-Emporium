import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//pages
import Home from './Pages/Home'
import Shop from './Pages/Shop/Shop'
import Desc from './Pages/Shop/Description'
import Chat from './Pages/Shop/Chat'
//history
// import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router>             
                    <Switch>
                        <Route exact path="/home" component={Home} />
                    <Route exact path="/shop" component={Shop} />  
                    <Route exact path="/desc" component={Desc} /> 
                    <Route exact path="/chat" component={Chat} /> 
                    </Switch>         
            </Router>
        )
    }
}