import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

// className={router.pathname == '/faq' ? 'active' : ''}

const Navigation = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <Navbar expand="lg" fixed="top" collapseOnSelect="true">
      <Container>
        <Navbar.Brand>The Pond at McKee Glen</Navbar.Brand>
        {/* {user ? <Navbar.Text className="ms-auto">Signed in as: {user.email}</Navbar.Text> : ''} */}
        <Navbar.Toggle aria-controls="primary-navigation" />
        <Navbar.Collapse id="primary-navigation">
          <Nav className="ms-auto">
            <>
              <Link href="/">
                <a className={router.pathname == '/' ? 'nav-link active' : 'nav-link'}>Home</a>
              </Link>
              <Link href="/about">
                <a className={router.pathname == '/about' ? 'nav-link active' : 'nav-link'}>About</a>
              </Link>
              <Link href="/faq">
                <a className={router.pathname == '/faq' ? 'nav-link active' : 'nav-link'}>Community FAQs</a>
              </Link>
              {user ? (
                <>
                  <Link href="/contact">
                    <a className={router.pathname == '/contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                  </Link>
                  <Link href="/dashboard">
                    <a className={router.pathname == '/dashboard' ? 'nav-link active' : 'nav-link'}>Dashboard</a>
                  </Link>
                </>
              ) : (
                ''
              )}
              {user ? (
                <Nav.Link
                  onClick={() => {
                    router.push('/')
                    logout()
                  }}>
                  Logout
                </Nav.Link>
              ) : (
                ''
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
