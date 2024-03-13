import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import { CartWidget } from "./CartWidget"
export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ModeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Computadores</Nav.Link>
            <Nav.Link href="#features">Tablets</Nav.Link>
            <Nav.Link href="#pricing">Celulares</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    
    )
}