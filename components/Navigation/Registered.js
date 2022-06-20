import { Container, Navbar, Nav } from "react-bootstrap"

const RegisteredNav = () => {
  return ( 
    <Navbar bg="light" expand="lg" className="navigation" sticky="top">
      <Container>
        <Navbar.Brand href="/community/dashboard">McKee Glen HOA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/community/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/community/documents">Documents</Nav.Link>
            <Nav.Link href="/community/announcements">Announcements &amp; News</Nav.Link>
            <Nav.Link href="/community/newsletters">Newsletters</Nav.Link>
            <Nav.Link href="/community/contact">Contact</Nav.Link>
            <Nav.Link href="/thepagewhichdoesnotexist">Broken Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default RegisteredNav;