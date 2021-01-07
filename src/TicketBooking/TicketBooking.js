import React, { Component } from 'react';
import axios from 'axios';

class TicketBooking extends Component {


    state={
        name: "",
        gender:"",
        email:"",
        phone:"",
        from:"",
        to:"",
        seatnumber:""
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
            gender: this.state.gender,
            email:this.state.email,
            phone: parseInt(this.state.phone),
            from: this.state.from,
            to: this.state.to,
            seatnumber:this.state.seatnumber
            
          };
  
          console.log(user);
      
          axios.post('https://ticket-booking-system-nestjs.herokuapp.com/ticket/newuser',user, {
            headers: {
                'Content-Type': 'application/json'
            },
          
        }).then((res) => {
            alert(JSON.stringify(res.data));
              })
              
              this.setState({
                name: "",
                gender:"",
                email:"",
                phone:"",
                from:"",
                to:"",
                seatnumber:""      
              });
              
            }
          

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                 <label>Ticket Booking</label>

                <div className="form-group">
                    <label >Name:</label>
                    <input type="text" className="form-control" name="name" required onChange={this.handleChange} value={this.state.name}></input>
                </div>

             

                <div className="form-group">
                    <label >Gender:</label>
                    <input type="text" className="form-control" name="gender"  required  onChange={this.handleChange} value={this.state.gender}></input>
                </div>

                <div className="form-group">
                    <label >Email:</label>
                    <input type="text" className="form-control" name="email" required  onChange={this.handleChange} value={this.state.email}></input>
                </div>



                <div className="form-group">
                    <label >Phonenumber:</label>
                    <input type="number" className="form-control" name="phone" min="6000000000" max="9999999999" required onChange={this.handleChange} value={this.state.phone}></input>
                </div>

      

                <div className="form-group">
                    <label >From:</label>
                    <input type="text" className="form-control" name="from"  required  onChange={this.handleChange} value={this.state.from}></input>
                </div>

                <div className="form-group">
                    <label >To:</label>
                    <input type="text" className="form-control" name="to" required  onChange={this.handleChange} value={this.state.to}></input>
                </div>

                <div className="form-group">
                    <label >Seatnumber:</label>
                    <input type="number" className="form-control" name="seatnumber"  min="1" max="40" required onChange={this.handleChange} value={this.state.seatnumber}></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

        </form>
        );
    }
}

export default TicketBooking;