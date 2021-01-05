import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import logo from './logo.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
        <img src={logo} alt="Logo" />;
         
          <form>
            <Button variant="btn btn-success">Welcome !</Button>
          </form>
        </div>
      </div>
    );
  }
}
