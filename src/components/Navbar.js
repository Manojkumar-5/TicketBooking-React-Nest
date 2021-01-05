import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Ticket Booking System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/OpenTickets">OpenTickets</Nav.Link>
                    <Nav.Link href="/ClosedTickets">ClosedTickets</Nav.Link>
                    <Nav.Link href="/TicketBooking">TicketBooking</Nav.Link>
                    <Nav.Link href="/Admin">Admin</Nav.Link>
                    <Nav.Link href="/Users">Users</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);