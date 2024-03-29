import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function submenu() {
  return (
    <Navbar className="bg-body-tertiary submenu pt-1, pb-2" style={{marginTop: '100px'}}>
      <Container>

        <Navbar.Collapse className="justify-content-end">
          <div>
            <a href="/login" className='signin'>
              <Button variant="primary" size="sm">
                Login
              </Button>
            </a>{''}
            <a href="/signup" className='signup ms-1'>
              <Button variant="secondary" size="sm" >
                SignUp
              </Button>
            </a>
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

