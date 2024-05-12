import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dime que sí Novia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#quienes-somos">¿Quiénes somos?</Nav.Link>
            <Nav.Link href="#como-comprar">¿Cómo comprar?</Nav.Link>
            <Nav.Link href="#lista-productos">Lista de productos</Nav.Link>
            <Nav.Link href="#comprar">Comprar</Nav.Link>
            <Nav.Link href="#playlist">Playlist</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
