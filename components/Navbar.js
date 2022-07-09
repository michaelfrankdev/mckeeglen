import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navigation = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Pond at McKee Glen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
                  {user.email}
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Link href="/" passHref>
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                  </Link>
                  <Link href="/about" passHref>
                    <Dropdown.Item href="/about">About</Dropdown.Item>
                  </Link>
                  <Link href="/dashboard" passHref>
                    <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                  </Link>
                  <Link href="/documents" passHref>
                    <Dropdown.Item href="/documents">Documents</Dropdown.Item>
                  </Link>
                  <Link href="/faq" passHref>
                    <Dropdown.Item href="/faq">Community FAQ</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Link href="passRef">
                    <Dropdown.Item
                      onClick={() => {
                        logout()
                        router.push('/')
                      }}>
                      Logout
                    </Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Link href="/" passHref>
                  <Nav.Link className={router.pathname == '/' ? 'nav-link active' : ''} href="/">
                    Home
                  </Nav.Link>
                </Link>
                <Link href="/about" passHref>
                  <Nav.Link className={router.pathname == '/about' ? 'nav-link active' : ''} href="/about">
                    About
                  </Nav.Link>
                </Link>
                <Link href="/faq" passHref>
                  <Nav.Link className={router.pathname == '/faq' ? 'nav-link active' : ''} href="/faq">
                    Community FAQ
                  </Nav.Link>
                </Link>
                {/* <Link href="/register" passHref>
                  <Nav.Link className={router.pathname == '/register' ? 'nav-link active' : ''} href="/register">
                    Register
                  </Nav.Link>
                </Link> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
