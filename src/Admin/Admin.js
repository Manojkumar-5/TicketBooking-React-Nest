import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Nav } from 'react-bootstrap';

class Admin extends Component {
  
    state={
      username: "",
      password:""
  }
    
      handleChange = (event) => {

        const {name,value}=event.target;
        this.setState({
            [name]:value    
        });
      }
    
      handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
          username:this.state.username,
          password:this.state.password
        };

        console.log(user);
    
        axios.post('https://ticket-booking-system-nestjs.herokuapp.com/ticket/admin',user, {
          headers: {
              'Content-Type': 'application/json'
          },
        
      }).then((res) => {
        alert(JSON.stringify(res.data));
          })
          
          this.setState({
            username: "",
            password:""       
          });
          
        }
      

      
        
       
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" name="username" required onChange={this.handleChange} value={this.state.username}></input>
                        </div>

                    
                    <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" required onChange={this.handleChange} value={this.state.password}>
                            </input>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
</form>


            </div>
        );
    }
}

export default Admin;