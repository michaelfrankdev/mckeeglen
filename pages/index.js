import { Col, Container, Row } from 'react-bootstrap'
import LoginPanel from '../components/LoginPanel'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="unprotected">Welcome!</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
            repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
            repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
            repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
          </p>
        </Col>
        {user ? (
          ''
        ) : (
          <Col md={4}>
            <h2>Login</h2>
            <LoginPanel />
          </Col>
        )}
      </Row>
    </Container>
  )
}
