import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo_transparent2.png';
import '../../styles/nav.css';
import generalUser from '../../images/general_user.png';
import employee from '../../images/employee.png';
import business from '../../images/business.png';
import consultation from '../../images/consultation.png';
import alert from '../../images/alert_notification.png';

export default function navbar() {
    return (
        <Navbar expand="lg" className="bg-dark navbar pt-4 pb-3">
            <Container>
                <Navbar.Brand href="home">
                    <img src={logo} className='img-fluid logo' alt='home' />
                </Navbar.Brand>
  
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav navbarScroll >
                        <Navbar.Brand href="/general_user">
                            <img src={generalUser} className='img-fluid general_user ms-5' alt='general_user'/>
                        </Navbar.Brand>
                        <Navbar.Brand href="/employee">
                            <img src={employee} className='img-fluid employee ms-5' alt='employee'/>
                        </Navbar.Brand>
                        <Navbar.Brand href="/business">
                            <img src={business} className='img-fluid business ms-5' alt='business' />
                        </Navbar.Brand>
                        <Navbar.Brand href="/consultation">
                            <img src={consultation} className='img-fluid consultation ms-5' alt='consultation'/>
                        </Navbar.Brand>
                        <Navbar.Brand className="ms-5" href="/alert_notification">
                            <img src={alert} className='img-fluid alert_notification ms-5' alt='alert_notification'/>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}