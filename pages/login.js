import { Col, Container, Row } from 'react-bootstrap'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Some page content over here.</p>
        </Col>
        <Col>
          <h4>Login to the Community Portal</h4>
          <Login />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
