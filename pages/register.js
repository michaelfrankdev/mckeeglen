import { Col, Container, Row } from 'react-bootstrap'
import RegisterPanel from '../components/Register'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Welcome!</h2>
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
        <Col md={4}>
          <h2>Register</h2>
          <RegisterPanel />
        </Col>
      </Row>
    </Container>
  )
}
