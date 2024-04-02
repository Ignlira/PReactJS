import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



import { CartWidget } from "./CartWidget"
export const NavBar = () => {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/Home">ModeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/category/computadores">Computadores</Nav.Link>
          <Nav.Link as={NavLink} to="/category/tablets">Tablets</Nav.Link>
          <Nav.Link as={NavLink} to="/category/celulares">Celulares</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
)
}