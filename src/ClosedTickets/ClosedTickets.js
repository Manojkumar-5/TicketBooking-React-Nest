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

            <table className="center">

                  <tbody>

                  {this.state.closedseats.map(close =>

                  <td>
                  <Button variant="btn btn-success" size="lg">{close.seatnumber}

                  </Button>
              </td>
                  )}

                  </tbody>
                

            </table>
    
            
          

          



        );
    }
}

export default ClosedTickets;