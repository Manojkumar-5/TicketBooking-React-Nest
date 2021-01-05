import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import OpenTickets from "./OpenTickets/OpenTickets";
import ClosedTickets from "./ClosedTickets/ClosedTickets";
import TicketBooking from "./TicketBooking/TicketBooking";
import Users from "./Users/Users";

import Home from "./Home/Home";
import history from './history';
import Login from './Login/Login'
import Admin from './Admin/Admin'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/OpenTickets" component={OpenTickets} />
                    <Route path="/ClosedTickets" component={ClosedTickets} />
                    <Route path="/TicketBooking" component={TicketBooking} />
                    <Route path="/Admin" component={Admin} />
                    <Route path="/Users" component={Users} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </Router>
        )
    }
}
