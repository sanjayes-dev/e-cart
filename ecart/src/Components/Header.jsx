import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
Button
function Header() {
  return (
    <div>
      {/* header section */}
     <Navbar expand="lg" className="bg-primary">
      <Container>
        
        <Navbar.Brand className='text-white' href="/">E-Cart</Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
