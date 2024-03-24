import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import '../../styles/nav.css'
import generalUser from '../../images/general_user.png'
import employee from '../../images/employee.png'
import business from '../../images/business.png'
import consultation from '../../images/consultation.png'
import alert from '../../images/alert_notification.png'


export default function navbar() {
    return (
        <Navbar expand="lg" className="bg-dark navbar pt-4, pb-3">
            <Container>
                <Navbar.Brand href="home">
                    <img src={logo} className='img-fluid logo' alt='home' />
                </Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success me-4">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        
                        navbarScroll
                    >
                       
                            <Navbar.Brand href="general_user icon">
                            <img src={generalUser} className='img-fluid general_user ms-5' alt='general_user'/>
                        </Navbar.Brand>
                        
                        
                            
                            <Navbar.Brand href="employee icon">
                            <img src={employee} className='img-fluid employee ms-5' alt='employee'/>
                        </Navbar.Brand>
                         

                     
                            <Navbar.Brand href="business icon">
                            <img src={business} className='img-fluid business ms-5' alt='business' />
                        </Navbar.Brand>
                          

                    
                            <Navbar.Brand href="consultation icon">
                            <img src={consultation} className='img-fluid consultation ms-5 me-' alt='consultation'/>
                        </Navbar.Brand>


                       
                            <Navbar.Brand href="alert_notification icon ">
                            <img src={alert} className='img-fluid alert_notification ms-5' alt='alert_notification'/>
                        </Navbar.Brand>
                           

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
