import { Col, Container, Row } from 'react-bootstrap'

const PrimaryFooter = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <span className="footer-statement">&copy; 2022, The Pond at McKee Glen</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default PrimaryFooter
