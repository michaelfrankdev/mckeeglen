import { Col, Container, Row } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

const PrimaryFooter = () => {
  const { user } = useAuth()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <span className="footer-statement">&copy;2022 The Pond at McKee Glen{user ? <> | Signed in as: {user.email}</> : ''}</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default PrimaryFooter
