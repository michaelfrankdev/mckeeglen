import { Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={{ color: 'red', fontSize: '32px' }}>Protected Route: Dashboard</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
