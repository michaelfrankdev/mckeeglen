import { Container, Navbar, Nav } from 'react-bootstrap'

const GuestNav = () => {
  return ( 
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/community/dashboard">McKee Glen HOA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/index">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
 
export default GuestNav;