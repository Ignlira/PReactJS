import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



import { CartWidget } from "./CartWidget"
export const NavBar = () => {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">ModeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/category/computador">Computadores</Nav.Link>
          <Nav.Link as={NavLink} to="/category/tablet">Tablets</Nav.Link>
          <Nav.Link as={NavLink} to="/category/celular">Celulares</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
)
}