import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class OpenTickets extends Component {

  state={
    openseats:[]
  }

  componentDidMount(){
    axios.get('https://ticket-booking-system-nestjs.herokuapp.com/ticket/ticketstatus/open')
    .then(res => {
      const openseats=res.data;
      this.setState({openseats});
    })
  }

    render() {
        return (

  
          <div>


          {this.state.openseats.map(open =>
          
          <Button variant="btn btn-success" size="lg" block>{open.seatnumber}
          </Button>
           
          )}

          </div>
       
        

      
                 
        );
    }
}

export default OpenTickets;