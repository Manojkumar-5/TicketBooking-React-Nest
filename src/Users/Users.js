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
        
        
<div className="row">
    <div className="col-sm-2" />
    <div className="col-sm-8">
    <div className="card p-5 shadow">
    <div className="bg-dark text-white">
        <ul>
               {this.state.logins.map(login => <li>{login.name}</li>)}
        </ul>
 
    </div>
</div>
</div>
<div className="col-sm-2" />
</div>

          




         );

}

}
export default Users;