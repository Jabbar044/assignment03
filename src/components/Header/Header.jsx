import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Who am I</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Favorite Hobbies</Nav.Link>
            <Nav.Link as={NavLink} to="/favper">Favorite Personality</Nav.Link>
            <Nav.Link as={NavLink} to="/favcit">Favorite Cities</Nav.Link>
            <Nav.Link as={NavLink} to="/favtour">Favorite Tourist Spots</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
