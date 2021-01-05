import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

  state={
    logins:[]
  }

  componentDidMount(){
    axios.get('https://ticket-booking-system-nestjs.herokuapp.com/ticket/login')
    .then(res => {
      const logins=res.data;
      this.setState({logins});
    })
  }
 
render() {

  return(
        <ul>
               
               {this.state.logins.map(login => <li>{login.name}</li>)}

        </ul>
  );

}

}
export default Users;