import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Styles/nav.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Styles/offcanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavbarReact = ({userdata, setUserdata, setToken}) => {
    const { usuario, rol } = userdata.data.user;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
      setUserdata({ data: { user: { 
        usuario:'', 
        correo:'', 
        contrasena:'', 
        nombre:'', 
        apellidoP:'', 
        fnacimiento:'', 
        sexo:'',
        rol:''}}});
        setToken('');
        localStorage.removeItem('token');
    };

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
            {rol === 0 ? ( 
              <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
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
              <NavDropdown.Item href="#action3">
                Crear producto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Editar producto
              </NavDropdown.Item>
            </NavDropdown>
              </Nav>
           
             ): rol === 1 ? ( <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                <NavDropdown title="Más" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Compras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Historial de Pagos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Chats
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>):(<></>)}
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
          {usuario ? (
             <div>
             <Nav.Link variant="primary" onClick={handleShow} className="nav-link" aria-current="page">profile</Nav.Link>
             </div>   
          
            
         ) : ( 
          <Nav.Link href="/login" className="ms-2" style={{ color: "#ff58b9" }}>Log In</Nav.Link>
         )}  
        </Navbar.Collapse>
      </Container>
      <OffcanvasComponent show={show} handleClose={handleClose} handleLogout={handleLogout} usuario={usuario} />
    </Navbar>
    );

};

const OffcanvasComponent = ({ show, handleClose, handleLogout, usuario}) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement='end' className="Offcanvas-backgorund">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Welcome {usuario}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body >
        <Link className="nav-link" aria-current="page">Perfil</Link>
        <Link className="nav-link" aria-current="page"  onClick={() =>{ 
          handleLogout();
          handleClose();}} to="./">LogOut</Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavbarReact;
