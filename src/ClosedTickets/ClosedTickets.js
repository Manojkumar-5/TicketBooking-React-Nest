import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './ClosedTickets.css';

class ClosedTickets extends Component {

  state={
    closedseats:[]
  }

  componentDidMount(){
    axios.get('https://ticket-booking-system-nestjs.herokuapp.com/ticket/ticketstatus/close')
    .then(res => {
      const closedseats=res.data;
      this.setState({closedseats});
    })
  }

    render() {
        return (

    
            
    <div className="row">
    <div className="col-sm-2" />
    <div className="col-sm-8">
    <div className="card p-5 shadow">
    {this.state.closedseats.map(close =>
    <div className="card p-1 shadow">
    <Button variant="danger" size="lg">{close.seatnumber}
    </Button>
    </div>

    )}


</div>
</div>
<div className="col-sm-2" />
</div>

          



        );
    }
}

export default ClosedTickets;