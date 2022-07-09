import { Col, Container, Row } from 'react-bootstrap'

const Documents = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={{ color: 'red', fontSize: '32px' }}>Protected Route: Documents</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Documents
