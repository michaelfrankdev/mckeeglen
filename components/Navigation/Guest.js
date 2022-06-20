import { Container, Navbar, Nav } from "react-bootstrap"

const GuestNav = () => {
  return (
    <Navbar bg='light' expand='lg' className='navigation' fixed='top'>
      <Container>
        <Navbar.Brand href='/'>McKee Glen HOA</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/help'>Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default GuestNav;