import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navigation = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <Navbar bg="light" expand="false" fixed="top" collapseOnSelect="true">
      <Container>
        <Navbar.Brand>Pond at McKee Glen</Navbar.Brand>
        {user ? <Navbar.Text className="ms-auto">Signed in as: {user.email}</Navbar.Text> : ''}
        <Navbar.Toggle aria-controls="primary-navigation" />
        <Navbar.Collapse id="primary-navigation">
          <Nav>
            {user ? (
              <>
                <Link href="/" passHref>
                  <Nav.Link href="/">Home</Nav.Link>
                </Link>
                <Link href="/about" passHref>
                  <Nav.Link href="/about">About</Nav.Link>
                </Link>
                <Link href="/contact" passHref>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Link>
                <Link href="/dashboard" passHref>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Link>
                <Link href="/documents" passHref>
                  <Nav.Link href="/documents">Documents</Nav.Link>
                </Link>
                <Link href="/newsletters" passHref>
                  <Nav.Link href="/newsletters">Newsletters</Nav.Link>
                </Link>
                <Link href="/faq" passHref>
                  <Nav.Link>Community FAQ</Nav.Link>
                </Link>
                <Link href="/#" passHref>
                  <Nav.Link
                    onClick={() => {
                      logout()
                      router.push('/')
                    }}>
                    Logout
                  </Nav.Link>
                </Link>
              </>
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
