import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Index() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand >Live Streaming App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
           
         
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Index
