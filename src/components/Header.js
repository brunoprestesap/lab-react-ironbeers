import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>IronHack</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={'/'}>
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
