import React from "react";
import './Styles/nav.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavbarReact = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className="Nav-titulo">BisonGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Pagina Principal</Nav.Link>
            <Nav.Link href="/Perfiles">Perfil</Nav.Link>
            <NavDropdown title="Más" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Compras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Historial de Pagos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Chats
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Opciones de vendedor" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/producto">
                Crear producto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Editar producto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="button-search" >Buscar</button>
          </Form>
          <Nav.Link href="/login" className="ms-2" style={{ color: "#ff58b9" }}>Log In</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

};

export default NavbarReact;
