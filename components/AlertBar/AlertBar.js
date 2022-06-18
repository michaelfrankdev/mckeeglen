import { Col, Container, Row } from 'react-bootstrap'
import styles from '../../styles/AlertBar.module.css'

const AlertBar = () => {
  return ( 
    <section className={styles.alertBar}>
      <Container>
        <Row>
          <Col>
            <p>This is text for the AlertBar.</p>
            <p>Source: <a href="#">https://www.example.com</a></p>
          </Col>
        </Row>
      </Container>
    </section>
   );
}
 
export default AlertBar;