import React, { Component } from 'react';
import axios from 'axios';
import './Login.css'

class Login extends Component {
  
    state={
      name: "",
      email:"",
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
          name: this.state.name,
          email:this.state.email,
          password:this.state.password
        };

        console.log(user);
    
        var response=axios.post('https://ticket-booking-system-nestjs.herokuapp.com/ticket/newlogin',user, {
          headers: {
              'Content-Type': 'application/json'
          },
        
      }).then((res) => {
        alert(JSON.stringify(res.data));
          })
          
          this.setState({
            name: "",
            email:"",
            password:""       
          });
          
        }
      
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" name="name" required onChange={this.handleChange} value={this.state.name}></input>
                        </div>

                    <div className="form-group">
                            <label>Email address:</label>
                            <input type="email" className="form-control" name="email" required onChange={this.handleChange} value={this.state.email}></input>
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

export default Login;