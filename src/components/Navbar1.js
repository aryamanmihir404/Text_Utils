import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Navbar1(props) {

  return (
    <Navbar bg={props.mode} variant={props.mode}>
    <Container>
      <Navbar.Brand href="#home">Text</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        
      </Nav>
    </Container>
    <Form><Form.Check 
        type="switch"
        id="custom-switch"
        label="Dark "
        onClick={props.toggleMode}
      /></Form>

   <div className="conatner mx-2">
   <Form><Form.Check 
        type="switch"
        id="custom-switch"
        label="Nature"
        onClick={props.natureMode}
      /></Form>
      </div>
    
  </Navbar>
   
  )
}




