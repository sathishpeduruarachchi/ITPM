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
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Navbar.Brand href="general_user">
                            <img src={generalUser} className='img-fluid general_user' alt='general_user'/>
                        </Navbar.Brand>

                        <Navbar.Brand href="employee">
                            <img src={employee} className='img-fluid employee' alt='employee'/>
                        </Navbar.Brand>

                        <Navbar.Brand href="business">
                            <img src={business} className='img-fluid business' alt='business' />
                        </Navbar.Brand>

                        <Navbar.Brand href="consultation">
                            <img src={consultation} className='img-fluid consultation' alt='consultation'/>
                        </Navbar.Brand>

                        <Navbar.Brand href="alert_notification">
                            <img src={alert} className='img-fluid alert_notification' alt='alert_notification'/>
                        </Navbar.Brand>


                        {/* <Nav.Link href="#action1" className="">Home</Nav.Link>
                         <Nav.Link href="#action2">Link</Nav.Link> */}
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
