import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import RegisterPanel from '../components/Register'

export default function Home() {
  return (
    <>
      <Head>
        <title>Register | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="panel">
            <h2 className="page-heading unprotected">Welcome!</h2>
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
    </>
  )
}
